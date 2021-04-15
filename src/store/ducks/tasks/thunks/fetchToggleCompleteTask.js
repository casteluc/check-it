import { db, auth } from '../../../../firebase'

import { toggleCompleteTask } from "../index"

const fetchToggleCompleteTask = ({targetId, completed}) => (dispatch, getState) => {
    let user = auth.currentUser

    db.collection("users").doc(user.uid).collection("tasks").doc(targetId).update({completed: !completed})
        .then(ref => {
            // toggle completed task on the state if completed task was changed in the db
            dispatch(toggleCompleteTask({targetId: targetId}))
        }).catch(err => {
            console.log(err)
        })
}

export default fetchToggleCompleteTask