import { auth } from "../firebase"
import store from "../store"
import { clearState } from "../store/ducks/tasks"

const signOut = () => {
    auth.signOut()
        .then(res => {
            store.dispatch(clearState())
        }).catch(err => {
            console.log(err)
        })
}

export default signOut
