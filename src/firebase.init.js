// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJio_tzCZEFx6Myq_fYbTEAwhkvovAjRs",
    authDomain: "tanbirs-legal-solution.firebaseapp.com",
    projectId: "tanbirs-legal-solution",
    storageBucket: "tanbirs-legal-solution.appspot.com",
    messagingSenderId: "986420543441",
    appId: "1:986420543441:web:4e4740d684f686b345aaf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;