// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDIyIX_iIYxraaXHZSZFW9_O3v1D6b_McY",
//   authDomain: "tour-and-travels-32348.firebaseapp.com",
//   projectId: "tour-and-travels-32348",
//   storageBucket: "tour-and-travels-32348.appspot.com",
//   messagingSenderId: "562719960145",
//   appId: "1:562719960145:web:40848234ef6790bfafdc70"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;