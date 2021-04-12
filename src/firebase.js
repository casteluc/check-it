import firebase from 'firebase/app';
import 'firebase/auth'

const server = firebase.initializeApp({
    apiKey: "AIzaSyCbx9todbaZidBkRuGTCv-t-q4Fi4odymc",
    authDomain: "check-it-e7b13.firebaseapp.com",
    projectId: "check-it-e7b13",
    storageBucket: "check-it-e7b13.appspot.com",
    messagingSenderId: "28013466003",
    appId: "1:28013466003:web:b37376d3de5f8df9b69866",
    measurementId: "G-S6JE8TEC5F"
    // apiKey: process.env.APP_API_KEY,
    // authDomain: process.env.APP_AUTH_DOMAIN,
    // projectId: process.env.APP_PROJECT_ID,
    // storageBucket: process.env.APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID,
    // measurementId: process.env.APP_MEASUREMENT_ID,
})

export const auth = server.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

export default server