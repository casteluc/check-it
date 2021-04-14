import { db, auth } from '../../../../firebase'

import { addTask } from "../index"

const fectchAddTask = (content) => (dispatch, getState) => {
    let user = auth.currentUser
    let task = {
        content,
        createdTime: Date.now(),
        completed: false
    }
    
    db.collection("users").doc(user.uid).collection("tasks").add(task)
        .then(ref => {
            dispatch(addTask({task, id: ref.id}))
        }).catch(err => {
            console.log(err)
        })
}

export default fectchAddTask