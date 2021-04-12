import { auth } from "../../firebase"

const authSignOut = () => {
    auth.signOut()
        .then(res => {
            console.log("deslogado")
        }).catch(err => {
            console.log(err)
        })
}

export default authSignOut