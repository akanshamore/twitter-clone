
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCx4YHPVoYiJBy4AIlrgLf-9xQMFobluds",
    authDomain: "twitter-clone-3deee.firebaseapp.com",
    projectId: "twitter-clone-3deee",
    storageBucket: "twitter-clone-3deee.appspot.com",
    messagingSenderId: "407237793219",
    appId: "1:407237793219:web:503d2f104295e8008a5976",
    measurementId: "G-DB35XYM0FC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;