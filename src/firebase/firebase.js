// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAdvx1gYfwPG7o_wRxYA-HqHTB295iuKVg",
  authDomain: "auth-91462.firebaseapp.com",
  projectId: "auth-91462",
  storageBucket: "auth-91462.appspot.com",
  messagingSenderId: "669939289456",
  appId: "1:669939289456:web:ef99b66cca864701b993b5",
  measurementId: "G-T9WE4TG1VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export{app,auth}