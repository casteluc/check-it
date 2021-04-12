import { auth } from "../../firebase"
import { signIn } from '../../store/ducks/auth'

const authSignIn = (credentials) => {
    return (dispatch) => {
        auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((res) => {
                dispatch(signIn(res.user))
            }).catch((err) => {
                console.log(err.response)
            })
    }
}

export default authSignIn