import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmjcXj-P518wpyPTAyt9DiUrgAsi99_vo",
    authDomain: "weather-sl.firebaseapp.com",
    databaseURL: "https://weather-sl-default-rtdb.firebaseio.com",
    projectId: "weather-sl",
    storageBucket: "weather-sl.appspot.com",
    messagingSenderId: "797878280540",
    appId: "1:797878280540:web:12639451d1eb604f00a199"
};

const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const database = getFirestore()
export const auth = getAuth(app)

export default app