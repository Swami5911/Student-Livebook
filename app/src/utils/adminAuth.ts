import { initializeApp, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updatePassword, updateEmail } from "firebase/auth";
import { firebaseConfig } from "../firebase";

// We use a secondary app instance so that 'createUser' doesn't log out the main admin user
export const createSecondaryUser = async (email: string, pass: string) => {
    let secondaryApp;
    try {
        secondaryApp = getApp('SecondaryApp');
    } catch (e) {
        // Initialize if not exists
        secondaryApp = initializeApp(firebaseConfig, "SecondaryApp");
    }

    const secondaryAuth = getAuth(secondaryApp);
    const userCredential = await createUserWithEmailAndPassword(secondaryAuth, email, pass);
    
    // Important: Sign out immediately from this secondary instance to keep it clean
    await signOut(secondaryAuth);
    
    return userCredential.user;
};

export const updateSecondaryUser = async (oldEmail: string, oldPass: string, newEmail?: string, newPass?: string) => {
    let secondaryApp;
    try {
        secondaryApp = getApp('SecondaryApp');
    } catch (e) {
        secondaryApp = initializeApp(firebaseConfig, "SecondaryApp");
    }

    const secondaryAuth = getAuth(secondaryApp);
    
    // Sign in as user
    const userCredential = await signInWithEmailAndPassword(secondaryAuth, oldEmail, oldPass);
    
    // Update password if provided
    if (newPass && newPass !== oldPass) {
        await updatePassword(userCredential.user, newPass);
    }
    
    // Update email if provided
    if (newEmail && newEmail !== oldEmail) {
        await updateEmail(userCredential.user, newEmail);
    }

    // Sign out
    await signOut(secondaryAuth);
};
