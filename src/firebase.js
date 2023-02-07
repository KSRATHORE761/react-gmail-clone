import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtntrDFzQ14gRmQnz7OcnVJK2-J98D3Pw",
  authDomain: "clone-57af5.firebaseapp.com",
  projectId: "clone-57af5",
  storageBucket: "clone-57af5.appspot.com",
  messagingSenderId: "768644920861",
  appId: "1:768644920861:web:1f59c72bff2ad29a2978f4",
  measurementId: "G-BDXFNN8993"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};
