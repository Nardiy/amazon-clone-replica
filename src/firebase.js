import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSaJawn8PGgMaNlG08O6ShDANsCyTMNIE",
  authDomain: "front-end-4b258.firebaseapp.com",
  projectId: "front-end-4b258",
  storageBucket: "front-end-4b258.appspot.com",
  messagingSenderId: "70280836713",
  appId: "1:70280836713:web:f8e6e53b2ea1379f5a54f8",
  measurementId: "G-DETSSJV0JY"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebaseApp.auth();
export {db, auth };
