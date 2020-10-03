import firebase from 'firebase';
import "firebase/auth"
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDUlCEnjvmdM8EdWcZ3DKPwkY9gQfPQGw0",
  authDomain: "neurth-chat.firebaseapp.com",
  databaseURL: "https://neurth-chat.firebaseio.com",
  projectId: "neurth-chat",
  storageBucket: "neurth-chat.appspot.com",
  messagingSenderId: "211443176155",
  appId: "1:211443176155:web:7b6393549d1b59d54472fe",
  measurementId: "G-JMRTTCTTR2"
      

});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export  {db,auth,storage};