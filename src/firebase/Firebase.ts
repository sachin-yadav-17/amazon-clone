
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDExyDJ35igSI29yujGBo7VoNImFAY94QM",
  authDomain: "sachin-project-6af75.firebaseapp.com",
  databaseURL: "https://sachin-project-6af75-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sachin-project-6af75",
  storageBucket: "sachin-project-6af75.firebasestorage.app",
  messagingSenderId: "556699417182",
  appId: "1:556699417182:web:b027d6d1ce90f178c312cf"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
