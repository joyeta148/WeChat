// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDgQvoHBZz9lFQMd2AteXJESg6BII0DoPU",

    authDomain: "wechat-1431f.firebaseapp.com",

    projectId: "wechat-1431f",

    storageBucket: "wechat-1431f.appspot.com",

    messagingSenderId: "1033736907449",

    appId: "1:1033736907449:web:12d48cb7a4b6554f504968",

    measurementId: "G-R1M5D52JF4"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

