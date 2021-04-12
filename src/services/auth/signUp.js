import { auth } from "../../firebase"
import { signUp } from '../../store/ducks/auth'

const authSignUp = (credentials) => {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((res) => {
                console.log(res)
                dispatch(signUp(res.user))
            }).catch((err) => {
                console.log(err)
            })
    }
}

export default authSignUp