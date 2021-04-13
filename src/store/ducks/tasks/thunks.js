import { db, auth } from '../../../firebase'

import { addTask } from "../tasks/index"
import createTask from "../../../utils/createTask"

export const fectchAddTask = (content) => (dispatch, getState) => {
    let task = createTask(content)
    let user = auth.currentUser
    
    db.collection("users").doc(user.uid).collection("tasks").add(task)
        .then(res => {
            dispatch(addTask({content}))
        }).catch(err => {
            console.log(err)
        })

}