import { auth } from "../firebase"

const signIn = (credentials) => {
    auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then( res => {
            console.log(res.user)
            return res.user
        }).catch( err => {
            console.log(err.code)
            console.log(err.message)
            return null
        })
}

export default signIn