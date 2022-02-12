//web version 8 namespaced
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQR5W2np81HLKr3DVjoW1-L6cXS3hERFA",
  authDomain: "react1-udemy.firebaseapp.com",
  projectId: "react1-udemy",
  storageBucket: "react1-udemy.appspot.com",
  messagingSenderId: "844014861801",
  appId: "1:844014861801:web:c669466030e50153d25f78",
  measurementId: "G-CX12BYLBF5"
};

firebase.initializeApp(firebaseConfig);
const store = firebase.firestore()

export {store}
/* Web version 9 modular
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBQR5W2np81HLKr3DVjoW1-L6cXS3hERFA",
  authDomain: "react1-udemy.firebaseapp.com",
  projectId: "react1-udemy"
});
const store = getFirestore()

export {store}
*/