import { auth } from "../../firebase"

const signUp = ({email, password}) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("registrado e logado")
        }).catch((err) => {
            console.log(err)
        })
}

export default signUp