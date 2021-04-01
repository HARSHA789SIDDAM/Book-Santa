import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCfPpuIlr5iYwbp4V4RoHl7OOwpziwRX8Q",
    authDomain: "book-santa-90b24.firebaseapp.com",
    databaseURL: "https://book-santa-90b24-default-rtdb.firebaseio.com",
    projectId: "book-santa-90b24",
    storageBucket: "book-santa-90b24.appspot.com",
    messagingSenderId: "1077853404985",
    appId: "1:1077853404985:web:aec8c5bc5e9a2c57bcb2e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

