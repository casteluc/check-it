import { auth } from "../firebase"

const signOut = () => {
    auth.signOut()
        .then(res => {
            console.log("deslogado")
        }).catch(err => {
            console.log(err)
        })
}

export default signOut
