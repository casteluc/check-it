import { auth } from "../../firebase"

export const signUp = ({email, password}) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("registrado e logado")
        }).catch((err) => {
            console.log(err)
        })
}