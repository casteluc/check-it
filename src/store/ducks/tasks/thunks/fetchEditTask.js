import { db, auth } from '../../../../firebase'

import { editTask } from "../index"

const fectchEditTask = ({targetId, content}) => (dispatch, getState) => {
    let user = auth.currentUser

    db.collection("users").doc(user.uid).collection("tasks").doc(targetId).update({content: content})
        .then(ref => {
            // if task was edited in db, updates the tasks state
            dispatch(editTask({targetId, content}))
        }).catch(err => {
            console.log(err)
        })
}

export default fectchEditTask