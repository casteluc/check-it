import { auth } from "../firebase"

const signIn = ({email, password}) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            return 
        }).catch((err) => {
            console.log(err)
        })
}

export default signIn

