import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCOiFWTO2C7xW7w38Q2N81pfctspe4doaw",
  authDomain: "react-twitter-clone-1.firebaseapp.com",
  projectId: "react-twitter-clone-1",
  storageBucket: "react-twitter-clone-1.appspot.com",
  messagingSenderId: "667288404646",
  appId: "1:667288404646:web:4b8da81f40a58bcc34ea67",
  measurementId: "G-B9B9WT13ZF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;