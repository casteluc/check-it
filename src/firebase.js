import firebase from 'firebase/app';
import 'firebase/auth'

const server = firebase.initializeApp({
    apiKey: process.env.APP_API_KEY,
    authDomain: process.env.APP_AUTH_DOMAIN,
    projectId: process.env.APP_PROJECT_ID,
    storageBucket: process.env.APP_STORAGE_BUCKET,
    messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.APP_MEASUREMENT_ID,
})

export const auth = server.auth()
export const firestore = server.firestore()

export default server