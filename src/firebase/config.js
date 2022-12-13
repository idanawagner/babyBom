// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiFWt4Yb_wgV26ysiicud6y1E9I-IWPyY",
  authDomain: "babybom-b27bb.firebaseapp.com",
  projectId: "babybom-b27bb",
  storageBucket: "babybom-b27bb.appspot.com",
  messagingSenderId: "317989478446",
  appId: "1:317989478446:web:2b17f176ae0b28e5f57fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app


// // Initialize Firebase Authentication and get a reference to the service

// const auth = getAuth(app);