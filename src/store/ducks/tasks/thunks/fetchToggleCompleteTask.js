import { db, auth } from '../../../../firebase'

import { toggleCompleteTask } from "../index"

const fetchToggleCompleteTask = ({targetId, completed}) => (dispatch, getState) => {
    let task = getState().tasks.filter(task => task.id === targetId)[0]
    let user = auth.currentUser

    console.log(task)
    db.collection("users").doc(user.uid).collection("tasks").doc(task.id).update({completed: !task.completed})
        .then(ref => {
            dispatch(toggleCompleteTask({targetId: task.id}))
        }).catch(err => {
            console.log(err)
        })
}

export default fetchToggleCompleteTask