// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:"AIzaSyA8mXK40AMI10tw6E0o51aN7PRTTgr-M7M",
  authDomain: "ibm-skill.firebaseapp.com",
  projectId: "ibm-skill",
  storageBucket: "ibm-skill.appspot.com",
  messagingSenderId: "1019473577881",
  appId: "1:1019473577881:web:bb476fc61ea909f20fb508",
  measurementId: "G-H16MDHZNB6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig);