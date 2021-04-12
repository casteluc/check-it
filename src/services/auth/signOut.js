import { auth } from "../../firebase"

export const signOut = () => {
    auth.signOut()
        .then(res => {
            console.log("deslogado")
        }).catch(err => {
            console.log(err)
        })
}
