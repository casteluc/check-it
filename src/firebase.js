import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCbx9todbaZidBkRuGTCv-t-q4Fi4odymc",
    authDomain: "check-it-e7b13.firebaseapp.com",
    projectId: "check-it-e7b13",
    storageBucket: "check-it-e7b13.appspot.com",
    messagingSenderId: "28013466003",
    appId: "1:28013466003:web:b37376d3de5f8df9b69866",
    measurementId: "G-S6JE8TEC5F"
})

export const auth = app.auth()
export const db = app.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider()


export default app