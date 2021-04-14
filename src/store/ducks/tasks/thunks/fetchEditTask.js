import { db, auth } from '../../../../firebase'

import { editTask } from "../index"

const fectchEditTask = (content) => (dispatch, getState) => {
    let user = auth.currentUser
    let task = {
        content,
        createdTime: Date.now(),
        completed: false
    }
    
    db.collection("users").doc(user.uid).collection("tasks").add(task)
        .then(ref => {
            dispatch(editTask({content, id: ref.id}))
        }).catch(err => {
            console.log(err)
        })
}

export default fectchEditTask