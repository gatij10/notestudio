// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp({});
} else {
    firebase.app(); // if already initialized, use that one
}

export default fire;