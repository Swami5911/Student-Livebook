import React, { useState, useEffect } from 'react';
import { useSwipeBack } from '../../hooks/useSwipeBack';
import { SwipeIndicator } from '../Common/SwipeIndicator';
import { ref, get, push, update, serverTimestamp } from "firebase/database";
import { database } from "../../firebase";
import '../../styles/Attendance.css';

interface Student {
    uid: string;
    studentId: string; // Roll number
    name: string;
    course: string;
}

interface AttendanceDashboardProps {
    onBack: () => void;
}

export const AttendanceDashboard: React.FC<AttendanceDashboardProps> = ({ onBack }) => {
    const [loading, setLoading] = useState(false);
    
    // Form Metadata
    const [courses, setCourses] = useState<string[]>([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [sessionDate, setSessionDate] = useState(new Date().toISOString().split('T')[0]);
    const [sessionPeriod, setSessionPeriod] = useState('09:00 AM - 09:50 AM');
    const [sessionSubject, setSessionSubject] = useState('');
    const [sessionTeacher, setSessionTeacher] = useState('');
    
    // Data
    const [allStudents, setAllStudents] = useState<Student[]>([]);
    const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
    
    // Bulk Upload State
    const [bulkInput, setBulkInput] = useState('');
    const [bulkCourseName, setBulkCourseName] = useState('');
    const [uploadError, setUploadError] = useState('');

    // Attendance State: uid -> 'P' | 'A' | 'L'
    const [attendanceMap, setAttendanceMap] = useState<{[uid: string]: 'P' | 'A' | 'L'}>({});
    
    // View Modes
    const [viewMode, setViewMode] = useState<'mark' | 'history' | 'upload'>('mark');
    const [history, setHistory] = useState<any[]>([]);
    const [selectedHistory, setSelectedHistory] = useState<any | null>(null);
    const [existingRecordId, setExistingRecordId] = useState<string | null>(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const usersRef = ref(database, 'users');
            const rostersRef = ref(database, 'attendance_rosters');
            
            const [usersSnap, rostersSnap] = await Promise.all([
                get(usersRef),
                get(rostersRef)
            ]);

            const studentList: Student[] = [];
            const courseSet = new Set<string>();

            // 1. Process Auth Users
            if (usersSnap.exists()) {
                const data = usersSnap.val();
                Object.entries(data).forEach(([uid, val]: [string, any]) => {
                    if (val.role === 'student' && val.studentId) {
                        const courseMatch = val.studentId.match(/[A-Za-z]+/);
                        let course = courseMatch ? courseMatch[0].toUpperCase() : 'UNKNOWN';
                        
                        studentList.push({
                            uid,
                            studentId: val.studentId,
                            name: val.name || 'Unknown',
                            course: course
                        });
                        courseSet.add(course);
                    }
                });
            }

            // 2. Process Bulk Upload Rosters
            if (rostersSnap.exists()) {
                const rostersData = rostersSnap.val();
                Object.entries(rostersData).forEach(([courseName, studentsObj]: [string, any]) => {
                    courseSet.add(courseName);
                    Object.entries(studentsObj).forEach(([pushId, studentVal]: [string, any]) => {
                        studentList.push({
                            uid: pushId,  // Fake UID from database push key
                            studentId: studentVal.rollNo,
                            name: studentVal.name,
                            course: courseName
                        });
                    });
                });
            }
            
            const availableCourses = Array.from(courseSet).sort();
            
            setAllStudents(studentList);
            setCourses(availableCourses);
            if (availableCourses.length > 0 && !selectedCourse) {
                setSelectedCourse(availableCourses[0]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadInitialData = async () => {
            if (selectedCourse) {
                const filtered = allStudents.filter(s => s.course === selectedCourse);
                // Sort by student ID / Roll
                filtered.sort((a,b) => a.studentId.localeCompare(b.studentId));
                setFilteredStudents(filtered);
                
                // Check if an attendance record already exists for this slot
                try {
                    const attRef = ref(database, 'attendance');
                    const snap = await get(attRef);
                    let foundRecordData = null;
                    let foundRecordId = null;

                    if (snap.exists()) {
                        const data = snap.val();
                        for (const [key, val] of Object.entries(data)) {
                            const record = val as any;
                            if (record.course === selectedCourse && 
                                record.date === sessionDate && 
                                record.period === sessionPeriod) {
                                foundRecordId = key;
                                foundRecordData = record;
                                break;
                            }
                        }
                    }

                    if (foundRecordId && foundRecordData) {
                        setExistingRecordId(foundRecordId);
                        setSessionSubject(foundRecordData.subject || '');
                        setSessionTeacher(foundRecordData.teacher || '');
                        
                        const newMap: {[uid: string]: 'P' | 'A' | 'L'} = {};
                        const savedStatuses = new Map();
                        if (foundRecordData.students) {
                             foundRecordData.students.forEach((s: any) => savedStatuses.set(s.uid, s.status));
                        }
                        
                        filtered.forEach(s => {
                            newMap[s.uid] = savedStatuses.has(s.uid) ? savedStatuses.get(s.uid) : 'P';
                        });
                        setAttendanceMap(newMap);
                    } else {
                        // Reset for fresh entry
                        setExistingRecordId(null);
                        const initialMap: {[uid: string]: 'P' | 'A' | 'L'} = {};
                        filtered.forEach(s => initialMap[s.uid] = 'P');
                        setAttendanceMap(initialMap);
                    }
                } catch (e) {
                     console.error("Error checking existing record:", e);
                     const initialMap: {[uid: string]: 'P' | 'A' | 'L'} = {};
                     filtered.forEach(s => initialMap[s.uid] = 'P');
                     setAttendanceMap(initialMap);
                }
            }
        };
        
        loadInitialData();
    }, [selectedCourse, sessionDate, sessionPeriod, allStudents]);

    const handleSaveAttendance = async () => {
        setLoading(true);
        try {
            const listToSave = filteredStudents.map(s => ({
                uid: s.uid,
                name: s.name,
                rollNo: s.studentId,
                status: attendanceMap[s.uid] || 'A'
            }));

            const attendanceRecord: any = {
                course: selectedCourse,
                date: sessionDate,
                period: sessionPeriod,
                subject: sessionSubject || 'N/A',
                teacher: sessionTeacher || 'N/A',
                timestamp: serverTimestamp(),
                students: listToSave
            };

            if (existingRecordId) {
                const reason = window.prompt("This attendance record has already been submitted.\n\nPlease provide a reason for modifying it:");
                if (reason === null || reason.trim() === "") {
                    setLoading(false);
                    return; // Abort save
                }
                
                attendanceRecord.lastModifiedReason = reason;
                attendanceRecord.lastModified = serverTimestamp();
                
                const recordRef = ref(database, `attendance/${existingRecordId}`);
                await update(recordRef, attendanceRecord);
                alert(`Attendance updated successfully for ${selectedCourse}!`);
            } else {
                const attendanceRef = ref(database, 'attendance');
                await push(attendanceRef, attendanceRecord);
                alert(`Attendance saved successfully for ${selectedCourse}!`);
            }
            
            setViewMode('history');
            fetchHistory();
        } catch (err: any) {
            alert('Error saving attendance: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchHistory = async () => {
        setLoading(true);
        try {
            const attRef = ref(database, 'attendance');
            const snap = await get(attRef);
            if (snap.exists()) {
                const data = snap.val();
                const histList = Object.entries(data).map(([id, val]: [string, any]) => ({
                    id,
                    ...val
                }));
                // Sort by date desc
                histList.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setHistory(histList);
                setViewMode('history');
            } else {
                setHistory([]);
                setViewMode('history');
            }
        } catch (err) {
             console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleBulkUpload = async () => {
        setUploadError('');
        if (!bulkCourseName.trim()) return setUploadError('Please specify a Course/Batch Name.');
        if (!bulkInput.trim()) return setUploadError('Please paste student data.');

        setLoading(true);
        try {
            // Parse lines
            const lines = bulkInput.split('\n').map(l => l.trim()).filter(l => l);
            const rosterRef = ref(database, `attendance_rosters/${bulkCourseName}`);
            
            let addedCount = 0;
            for (const line of lines) {
                // Split by Tab, Comma, or multi-space
                const parts = line.split(/\t|,|\s{2,}/); 
                
                let roll = '';
                let name = '';

                if (parts.length >= 2) {
                    roll = parts[0].trim();
                    name = parts.slice(1).join(' ').trim();
                } else {
                    // Fallback: try to split by first space (assuming Roll Name format)
                    const spaceIdx = line.indexOf(' ');
                    if (spaceIdx > -1) {
                        roll = line.substring(0, spaceIdx).trim();
                        name = line.substring(spaceIdx + 1).trim();
                    } else {
                        roll = line; // No name? Just use as roll
                        name = 'Unknown';
                    }
                }

                if (roll) {
                     await push(rosterRef, {
                        rollNo: roll,
                        name: name
                     });
                     addedCount++;
                }
            }

            alert(`Successfully uploaded ${addedCount} students to ${bulkCourseName}!`);
            setBulkInput('');
            setBulkCourseName('');
            setViewMode('mark');
            setSelectedCourse(bulkCourseName);
            await fetchStudents(); // Refresh lists
        } catch (err: any) {
            setUploadError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const downloadCSV = (record: any) => {
        if (!record || !record.students) return;
        
        // Define CSV headers and metadata
        let csvContent = `Course,${record.course}\n`;
        csvContent += `Subject,${record.subject || 'N/A'}\n`;
        csvContent += `Teacher,${record.teacher || 'N/A'}\n`;
        csvContent += `Date,${record.date}\n`;
        csvContent += `Period,${record.period}\n\n`;
        csvContent += "Roll Number,Student Name,Status\n";
        
        // Add student rows
        record.students.forEach((student: any) => {
            const statusFull = student.status === 'P' ? 'Present' : student.status === 'A' ? 'Absent' : 'Late';
            // Escape names that might contain commas
            const safeName = student.name.includes(',') ? `"${student.name}"` : student.name;
            csvContent += `${student.rollNo},${safeName},${statusFull}\n`;
        });
        
        // Create a Blob and trigger download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Attendance_${record.course}_${record.date}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const { onTouchStart, onTouchMove, onTouchEnd, dragOffset } = useSwipeBack({ onBack });

    return (
        <div 
            className="attendance-dashboard" 
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ touchAction: 'pan-y' }}
        >
            <SwipeIndicator offset={dragOffset} />
            <header className="att-header">
                <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <button onClick={onBack} className="btn-icon">&larr;</button>
                    <h2 style={{margin: 0}}>Class Attendance</h2>
                </div>
                <div className="att-actions">
                    <button className={`btn-tab ${viewMode === 'mark' ? 'active' : ''}`} onClick={() => setViewMode('mark')}>Mark Attendance</button>
                    <button className={`btn-tab ${viewMode === 'upload' ? 'active' : ''}`} onClick={() => setViewMode('upload')}>Bulk Upload</button>
                    <button className={`btn-tab ${viewMode === 'history' ? 'active' : ''}`} onClick={fetchHistory}>View History</button>
                </div>
            </header>

            <div className="att-content">
                {viewMode === 'mark' ? (
                    <>
                        <aside className="att-sidebar">
                            <h3 style={{marginBottom: '1.5rem', color: '#1e293b'}}>⚙️ Session Setup</h3>
                            <div className="form-group">
                                <label>🏫 Course / Program</label>
                                <select 
                                    value={selectedCourse} 
                                    onChange={e => setSelectedCourse(e.target.value)}
                                    className="att-input"
                                >
                                    {courses.map(c => <option key={c} value={c}>{c} Students</option>)}
                                    {courses.length === 0 && <option value="">No courses generated yet</option>}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>📅 Date</label>
                                <input 
                                    type="date" 
                                    value={sessionDate} 
                                    onChange={e => setSessionDate(e.target.value)} 
                                    className="att-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>⏱️ Period Timing</label>
                                <select 
                                    value={sessionPeriod} 
                                    onChange={e => setSessionPeriod(e.target.value)} 
                                    className="att-input"
                                >
                                    <option value="09:00 AM - 09:50 AM">09:00 AM - 09:50 AM</option>
                                    <option value="10:00 AM - 10:50 AM">10:00 AM - 10:50 AM</option>
                                    <option value="10:50 AM - 11:40 AM">10:50 AM - 11:40 AM</option>
                                    <option value="11:40 AM - 12:30 PM">11:40 AM - 12:30 PM</option>
                                    <option value="01:30 PM - 02:20 PM">01:30 PM - 02:20 PM</option>
                                    <option value="02:20 PM - 03:10 PM">02:20 PM - 03:10 PM</option>
                                    <option value="03:10 PM - 04:00 PM">03:10 PM - 04:00 PM</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>📚 Subject</label>
                                <input 
                                    type="text" 
                                    value={sessionSubject} 
                                    onChange={e => setSessionSubject(e.target.value)} 
                                    className="att-input"
                                    placeholder="e.g. Mathematics"
                                />
                            </div>

                            <div className="form-group">
                                <label>👩‍🏫 Teacher Name</label>
                                <input 
                                    type="text" 
                                    value={sessionTeacher} 
                                    onChange={e => setSessionTeacher(e.target.value)} 
                                    className="att-input"
                                    placeholder="e.g. Prof. Smith"
                                />
                            </div>

                            <div className="student-stats" style={{marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px'}}>
                                <p style={{margin: 0, color: '#475569'}}>Total Students: <strong style={{color: '#1e293b', fontSize: '1.2rem'}}>{filteredStudents.length}</strong></p>
                            </div>
                            
                            <button 
                                className={`btn-save-att ${existingRecordId ? 'btn-update' : ''}`}
                                onClick={handleSaveAttendance} 
                                disabled={loading || filteredStudents.length === 0}
                            >
                                {loading ? 'Saving...' : existingRecordId ? '✏️ Update Attendance' : '💾 Save Attendance'}
                            </button>
                        </aside>

                        <main className="att-main-view">
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                                <h3>Student Roster</h3>
                                <p style={{color: '#64748b', fontSize: '0.9rem'}}>Toggle status: <span style={{color:'#10b981', fontWeight:'bold'}}>P</span>resent, <span style={{color:'#ef4444', fontWeight:'bold'}}>A</span>bsent, or <span style={{color:'#f59e0b', fontWeight:'bold'}}>L</span>ate</p>
                            </div>
                            
                            {filteredStudents.length === 0 ? (
                                <div style={{textAlign: 'center', padding: '3rem', color: '#64748b', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px'}}>
                                    <h3 style={{color: '#94a3b8', marginBottom: '0.5rem'}}>No Students Found</h3>
                                    <p>Go to the <strong>Bulk Upload</strong> tab to add your roster for this class!</p>
                                </div>
                            ) : (
                                <div className="mark-grid">
                                    {filteredStudents.map(student => (
                                        <div 
                                            key={student.uid} 
                                            className={`mark-card card-${(attendanceMap[student.uid] || '').toLowerCase()}`}
                                        >
                                            <div className="mark-roll">{student.studentId}</div>
                                            <div className="mark-name">{student.name}</div>
                                            <div className="status-toggles">
                                                <button 
                                                    className={`toggle-btn ${attendanceMap[student.uid] === 'P' ? 'active-p' : ''}`} 
                                                    onClick={() => setAttendanceMap({...attendanceMap, [student.uid]: 'P'})}
                                                    title="Present"
                                                >P</button>
                                                <button 
                                                    className={`toggle-btn ${attendanceMap[student.uid] === 'A' ? 'active-a' : ''}`} 
                                                    onClick={() => setAttendanceMap({...attendanceMap, [student.uid]: 'A'})}
                                                    title="Absent"
                                                >A</button>
                                                <button 
                                                    className={`toggle-btn ${attendanceMap[student.uid] === 'L' ? 'active-l' : ''}`} 
                                                    onClick={() => setAttendanceMap({...attendanceMap, [student.uid]: 'L'})}
                                                    title="Late"
                                                >L</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </main>
                    </>
                ) : viewMode === 'upload' ? (
                    <div style={{gridColumn: '1 / -1', background: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', maxWidth: '800px', margin: '0 auto'}}>
                        <h3 style={{color: '#1e293b', marginBottom: '1rem'}}>📥 Bulk Upload Student Roster</h3>
                        <p style={{color: '#64748b', marginBottom: '2rem'}}>Quickly add students to class rosters without creating login accounts. Just paste from Excel or Sheets!</p>

                        <div className="form-group">
                            <label>Class / Course Name</label>
                            <input 
                                type="text"
                                className="att-input"
                                placeholder="e.g. B.Tech 1st Year, BCA 2nd Year"
                                value={bulkCourseName}
                                onChange={e => setBulkCourseName(e.target.value)}
                            />
                            <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px'}}>This will create a new group in the dropdown.</p>
                        </div>

                        <div className="form-group">
                            <label>Paste Data (Roll Number [Tab] Name)</label>
                            <textarea 
                                className="att-input"
                                rows={10}
                                placeholder={`001\tRahul Kumar\n002\tPriya Sharma\n003\tAmit Singh`}
                                value={bulkInput}
                                onChange={e => setBulkInput(e.target.value)}
                                style={{fontFamily: 'monospace', whiteSpace: 'pre'}}
                            ></textarea>
                            <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px'}}>Hint: Copy two columns directly from Excel and paste here.</p>
                        </div>

                        {uploadError && <p style={{color: '#ef4444', marginBottom: '1rem'}}>{uploadError}</p>}

                        <button 
                            className="btn-save-att" 
                            onClick={handleBulkUpload}
                            disabled={loading || !bulkInput || !bulkCourseName}
                            style={{background: '#10b981'}}
                        >
                            {loading ? 'Uploading...' : 'Upload & Create Roster'}
                        </button>
                    </div>
                ) : (
                    <div style={{gridColumn: '1 / -1', background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}}>
                         <h3 style={{marginBottom: '1.5rem', color: '#1e293b'}}>Attendance History Overview</h3>
                         {loading ? <p>Loading history...</p> : (
                             history.length === 0 ? <p style={{color: '#64748b'}}>No attendance records found yet.</p> : (
                                <table className="att-table" style={{marginTop: '1rem'}}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Course</th>
                                            <th>Period</th>
                                            <th>Present Rate</th>
                                            <th>Total Students</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {history.map(record => {
                                            const total = record.students ? record.students.length : 0;
                                            const presentCount = record.students ? record.students.filter((s:any) => s.status === 'P' || s.status === 'L').length : 0;
                                            const presentPerc = total > 0 ? Math.round((presentCount / total) * 100) : 0;
                                            
                                            return (
                                                <tr 
                                                    key={record.id} 
                                                    style={{cursor: 'pointer'}} 
                                                    onClick={() => setSelectedHistory(record)}
                                                    className="history-row-hover"
                                                >
                                                    <td style={{fontWeight: 500}}>{record.date}</td>
                                                    <td><span className="course-badge">{record.course}</span></td>
                                                    <td style={{color: '#475569'}}>
                                                        {record.period}
                                                        {record.lastModifiedReason && (
                                                            <span style={{marginLeft: '8px', fontSize: '0.75rem', background: '#fef3c7', color: '#b45309', padding: '2px 6px', borderRadius: '4px'}}>Modified</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                                            <div style={{width: '120px', background: '#e2e8f0', height: '10px', borderRadius: '5px', overflow: 'hidden'}}>
                                                                <div style={{
                                                                    width: `${presentPerc}%`, 
                                                                    background: presentPerc > 75 ? '#10b981' : (presentPerc > 50 ? '#f59e0b' : '#ef4444'), 
                                                                    height: '100%', 
                                                                    borderRadius: '5px'
                                                                }}></div>
                                                            </div>
                                                            <span style={{fontSize: '0.85rem', fontWeight: 600}}>{presentPerc}%</span>
                                                        </div>
                                                    </td>
                                                    <td style={{color: '#64748b'}}>{presentCount} / {total} Present <span style={{marginLeft: '10px', color: '#4f46e5'}}>👁 View</span></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                             )
                         )}
                    </div>
                )}
            </div>

            {/* History Details Modal */}
            {selectedHistory && (
                <div className="modal-overlay" onClick={() => setSelectedHistory(null)} style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{background: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
                            <div>
                                <h3 style={{margin: '0 0 0.5rem 0'}}>{selectedHistory.course} - {selectedHistory.subject || 'N/A'}</h3>
                                <p style={{margin: 0, color: '#64748b'}}>Teacher: {selectedHistory.teacher || 'N/A'}</p>
                                <p style={{margin: '0.2rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem'}}>{selectedHistory.date} | {selectedHistory.period}</p>
                                {selectedHistory.lastModifiedReason && (
                                    <div style={{marginTop: '0.5rem', padding: '8px 12px', background: '#fffbeb', borderLeft: '3px solid #f59e0b', fontSize: '0.85rem', color: '#b45309'}}>
                                        <strong>Modified:</strong> {selectedHistory.lastModifiedReason}
                                    </div>
                                )}
                            </div>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <button className="btn-tab active" onClick={() => downloadCSV(selectedHistory)} style={{background: '#10b981', color: 'white'}}>⏬ Download CSV</button>
                                <button onClick={() => setSelectedHistory(null)} style={{background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#94a3b8'}}>&times;</button>
                            </div>
                        </div>

                        <table className="att-table">
                            <thead>
                                <tr>
                                    <th>Roll No</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedHistory.students && selectedHistory.students.map((student: any, idx: number) => (
                                    <tr key={idx}>
                                        <td style={{color: '#64748b'}}>{student.rollNo}</td>
                                        <td style={{fontWeight: 500}}>{student.name}</td>
                                        <td>
                                            <span style={{
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: 'bold',
                                                background: student.status === 'P' ? '#dcfce7' : student.status === 'A' ? '#fee2e2' : '#fef3c7',
                                                color: student.status === 'P' ? '#166534' : student.status === 'A' ? '#991b1b' : '#b45309'
                                            }}>
                                                {student.status === 'P' ? 'Present' : student.status === 'A' ? 'Absent' : 'Late'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};
