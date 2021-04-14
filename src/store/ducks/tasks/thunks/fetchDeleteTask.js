import { db, auth } from '../../../../firebase'

import { deleteTask } from "../index"

const fectchDeleteTask = (targetId) => (dispatch, getState) => {
    let user = auth.currentUser

    db.collection("users").doc(user.uid).collection("tasks").doc(targetId).delete()
        .then(ref => {
            dispatch(deleteTask({targetId}))
        }).catch(err => {
            console.log(err)
        })
}

export default fectchDeleteTask