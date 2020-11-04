import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBakSwWDH3fEl6BLUolAjiGYhEtZRbj6Cg",
  authDomain: "service64-bb245.firebaseapp.com",
  databaseURL: "https://service64-bb245.firebaseio.com",
  projectId: "service64-bb245",
  storageBucket: "service64-bb245.appspot.com",
  messagingSenderId: "181941916281",
  appId: "1:181941916281:web:4985b2a4e24094952bfaa8",
  measurementId: "G-KP0YPZQQW2",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
