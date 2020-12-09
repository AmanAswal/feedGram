import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGS0ERpaMtzCAfx2sbAxaOVApuIUEH1mk",
    authDomain: "photogram-afa4b.firebaseapp.com",
    projectId: "photogram-afa4b",
    storageBucket: "photogram-afa4b.appspot.com",
    messagingSenderId: "417924991292",
    appId: "1:417924991292:web:a500a1382bba146d483639"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };
  