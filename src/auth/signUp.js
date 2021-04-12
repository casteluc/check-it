import { auth } from "../firebase"

const signUp = (credentials) => {
    auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then( res => {
            return res.user 
        }).catch( err => {
            console.log(err.code)
            console.log(err.message)
            return null
        })
}

export default signUp