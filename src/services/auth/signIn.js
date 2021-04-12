import { auth } from "../../firebase"

const signIn = ({email, password}) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("logado")
        }).catch((err) => {
            console.log(err)
        })
}

export default signIn