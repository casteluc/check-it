import { auth, googleProvider } from "../../firebase"

export const signIn = ({email, password}) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("logado")
        }).catch((err) => {
            console.log(err)
        })
}

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
}
