import { db, auth } from '../../../../firebase'

import { deleteTask } from "../index"

const fectchDeleteTask = (targetId) => (dispatch, getState) => {
    let user = auth.currentUser

    db.collection("users").doc(user.uid).collection("tasks").doc(targetId).delete()
        .then(ref => {
            // if task was deleted in db, updates the tasks state
            dispatch(deleteTask({targetId}))
        }).catch(err => {
            console.log(err)
        })
}

export default fectchDeleteTask