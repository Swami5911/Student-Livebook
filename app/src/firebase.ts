import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "skd-livebook.firebaseapp.com",
  projectId: "skd-livebook",
  // Adding databaseURL explicitly to ensure Realtime Database works
  databaseURL: "https://skd-livebook-default-rtdb.firebaseio.com",
  storageBucket: "skd-livebook.firebasestorage.app",
  messagingSenderId: "288305694747",
  appId: "1:288305694747:web:7bee88795410a1a28f10be",
  measurementId: "G-9VKT00N84Q"
};

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Explicitly pass URL to avoid config issues
export const database = getDatabase(app, "https://skd-livebook-default-rtdb.firebaseio.com");
export const auth = getAuth(app);
