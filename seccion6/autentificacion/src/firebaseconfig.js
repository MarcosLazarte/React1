import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBQR5W2np81HLKr3DVjoW1-L6cXS3hERFA",
    authDomain: "react1-udemy.firebaseapp.com",
    projectId: "react1-udemy",
    storageBucket: "react1-udemy.appspot.com",
    messagingSenderId: "844014861801",
    appId: "1:844014861801:web:e446dd9b4f290fccd25f78",
    measurementId: "G-WZKH4SB8PX"
  };
  
  // Initialize Firebase
  const fire = initializeApp(firebaseConfig);