import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCxYT8BjGW72vDJ9XDcOJ7qmG9_QwVfhH8",
  authDomain: "storage-abm.firebaseapp.com",
  projectId: "storage-abm",
  storageBucket: "storage-abm.appspot.com",
  messagingSenderId: "1023798221607",
  appId: "1:1023798221607:web:1e14160d4b32fd06dba702",
  measurementId: "G-1DNVTJH9YJ"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;