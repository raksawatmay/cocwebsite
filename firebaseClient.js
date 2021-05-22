import firebase from "firebase";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAcQnj6H_dmY5ltNr6myaoz_B9g7vAW4GM",
    authDomain: "cocwebsite-b821b.firebaseapp.com",
    projectId: "cocwebsite-b821b",
    storageBucket: "cocwebsite-b821b.appspot.com",
    messagingSenderId: "254904325135",
    appId: "1:254904325135:web:8d9029d8b66505c1deff7a"
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}