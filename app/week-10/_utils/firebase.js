// /_utils/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// 1. Import the Firestore function
import { getFirestore } from "firebase/firestore"; // <-- ADD THIS

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Get the Auth instance and export it
export const auth = getAuth(app); 

// 3. Get the Firestore instance and export it as 'db'
export const db = getFirestore(app); // <-- ADD THIS