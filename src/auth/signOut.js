import { auth } from "../firebase"
import store from "../store"
import { clearTasks } from "../store/ducks/tasks"

const signOut = () => {
    auth.signOut()
        .then(res => {
            store.dispatch(clearTasks())
        }).catch(err => {
            console.log(err)
        })
}

export default signOut
