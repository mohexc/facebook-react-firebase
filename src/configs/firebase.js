import * as firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,

})

const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, storage, timestamp, };