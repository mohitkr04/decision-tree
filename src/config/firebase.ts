import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLZkG9KEqZPnXWPGgqn5idgR-nM8rFMKY",
  authDomain: "decision-tree-b7e99.firebaseapp.com",
  projectId: "decision-tree-b7e99",
  storageBucket: "decision-tree-b7e99.appspot.com",
  messagingSenderId: "1098374471799",
  appId: "1:1098374471799:web:8b9b9b9b9b9b9b9b9b9b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;