import { gapi } from 'gapi-script';

// User provided credentials
const CLIENT_ID = import.meta.env.VITE_GOOGLE_DOCS_CLIENT_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_DOCS_API_KEY;

// Scopes: Docs (for lectures) + Drive (file picker) + Spreadsheets (Attendance)
const SCOPES = "https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets";
const DISCOVERY_DOCS = [
    "https://docs.googleapis.com/$discovery/rest?version=v1",
    "https://sheets.googleapis.com/$discovery/rest?version=v4"
];

export const ensureSheetApiLoaded = async () => {
    if (!gapi.client) throw new Error("GAPI not loaded");

    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance || !authInstance.isSignedIn.get()) {
        throw new Error("You are NOT signed in. Please click 'Link Google Docs' in the menu.");
    }

    const currentUser = authInstance.currentUser.get();
    if (!currentUser.hasGrantedScopes('https://www.googleapis.com/auth/spreadsheets')) {
        throw new Error("Missing Permissions. Please click 'Unlink' and then 'Link Google' again to approve Sheets access.");
    }

    // Force sync token
    const authResponse = currentUser.getAuthResponse();
    if (authResponse && authResponse.access_token) {
        gapi.client.setToken({ access_token: authResponse.access_token });
    }

    if (!gapi.client.sheets) {
        console.log("Sheets API missing, forcing load...");
        await gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4');
    }
    // Double check
    if (!gapi.client.sheets) throw new Error("Failed to load Sheets API");
};

export const initGoogleClient = (onInit: (isSignedIn: boolean) => void) => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
      plugin_name: "Livebook" // Required fix for server_error
    }).then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(onInit);
        // Handle the initial sign-in state.
        onInit(gapi.auth2.getAuthInstance().isSignedIn.get());
    }).catch((error: any) => {
        console.error("Error initializing Google Client", error);
    });
  });
};

export const signIn = async () => {
    try {
        await gapi.auth2.getAuthInstance().signIn();
        // Listener in initGoogleClient will handle state update
    } catch (e: any) {
        console.error("Sign In Error:", e);
        alert(`Sign In Failed: ${e.error || JSON.stringify(e)}\n\nYour Current URL Origin: ${window.location.origin}\n\n(Please check if this EXACT text is in Google Cloud Console)`);
    }
};

export const signOut = () => {
    gapi.auth2.getAuthInstance().signOut();
};

// --- Google Docs (Lectures) ---

export const syncLectureToGoogleDoc = async (title: string, content: string, existingDocId?: string): Promise<string> => {
    if (!gapi.client.docs) throw new Error("Google Docs API not loaded");

    let docId = existingDocId;

    try {
        if (!docId) {
            const response = await gapi.client.docs.documents.create({
                resource: { title: title }
            });
            docId = response.result.documentId;
        }

        if (!docId) throw new Error("Failed to get Doc ID");

        const docObj = await gapi.client.docs.documents.get({ documentId: docId });
        const endRequestIndex = docObj.result.body.content[docObj.result.body.content.length - 1].endIndex - 1;

        const requests = [];
        if (endRequestIndex > 1) {
             requests.push({
                deleteContentRange: {
                    range: { startIndex: 1, endIndex: endRequestIndex }
                }
            });
        }

        requests.push({
            insertText: {
                location: { index: 1 },
                text: content
            }
        });

        await gapi.client.docs.documents.batchUpdate({
            documentId: docId,
            resource: { requests: requests }
        });

        return docId;

    } catch (error: any) {
        console.error("Error syncing to Google Doc:", error);
        throw error;
    }
};

// --- Google Sheets (Attendance) ---

/**
 * Ensures the sheet has the correct headers: "Roll No", "Name", "Stats"
 */
export const initializeAttendanceSheet = async (spreadsheetId: string) => {
    if (!gapi.client.sheets) throw new Error("Sheets API not loaded");
    
    // We assume the first sheet (gid=0) or we can create a new tab for the class
    // For simplicity, let's just check the first row of the first sheet
    try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'A1:Z1'
        });
        
        const headerRow = response.result.values ? response.result.values[0] : [];
        if (!headerRow || headerRow.length === 0) {
            // Empty sheet, initialize headers
            await gapi.client.sheets.spreadsheets.values.update({
                spreadsheetId,
                range: 'A1',
                valueInputOption: 'RAW',
                resource: {
                    values: [['Roll No', 'Name', 'Total Present']] 
                }
            });
        }
    } catch (e) {
        console.error("Error init sheet", e);
        throw e;
    }
};

export const fetchStudentList = async (spreadsheetId: string) => {
     if (!gapi.client.sheets) throw new Error("Sheets API not loaded");
     // Read Cols A and B (Roll No, Name)
     const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'A2:B100' // Assume max 100 students for now
    });
    return response.result.values || [];
};

export const fetchAttendanceData = async (spreadsheetId: string) => {
    if (!gapi.client.sheets) throw new Error("Sheets API not loaded");
    // Read the whole grid
    const response = await gapi.client.sheets.spreadsheets.values.get({
       spreadsheetId,
       range: 'A1:Z100' 
   });
   return response.result.values || [];
};

export const addStudentToSheet = async (spreadsheetId: string, rollNo: string, name: string) => {
    if (!gapi.client.sheets) throw new Error("Sheets API not loaded");
    
    // Append to bottom
    await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A1',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [[rollNo, name, '0']]
        }
    });
};

export const markAttendanceColumn = async (spreadsheetId: string, date: string, statusMap: {[rollNo: string]: boolean}) => {
    if (!gapi.client.sheets) throw new Error("Sheets API not loaded");

    // 1. Find or Create Date Column
    const grid = await fetchAttendanceData(spreadsheetId);
    if (grid.length === 0) return; // Should be init first
    
    const header = grid[0];
    let dateColIndex = header.indexOf(date);
    
    if (dateColIndex === -1) {
        // Create new column header
        dateColIndex = header.length;
        // Use column number to letter (A=0, B=1, ... AA...) logic or simplified for now (assuming < 26 cols)
        const colLetter = String.fromCharCode(65 + dateColIndex); 
        
        await gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId,
            range: `${colLetter}1`,
            valueInputOption: 'RAW',
            resource: { values: [[date]] }
        });
    }

    // 2. Update rows based on Roll No key
    // We need to match Roll No (Col A) to the Row Index
    const updates = [];
    
    // Row 0 is header, so start at Row 1 (index 1 => Row 2)
    for (let i = 1; i < grid.length; i++) {
        const row = grid[i];
        const rollNo = row[0]; // A column
        if (!rollNo) continue;
        
        const isPresent = statusMap[rollNo] || false;
        const val = isPresent ? 'P' : 'A';
        
        const colLetter = String.fromCharCode(65 + dateColIndex); // Simplified A-Z
        const cellRange = `${colLetter}${i + 1}`;
        
        updates.push({
            range: cellRange,
            values: [[val]]
        });
    }

    // Batch update all cells
    if (updates.length > 0) {
        await gapi.client.sheets.spreadsheets.values.batchUpdate({
            spreadsheetId,
            resource: {
                data: updates,
                valueInputOption: 'RAW'
            }
        });
    }
};
