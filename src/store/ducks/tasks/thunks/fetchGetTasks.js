import { addTask } from '..'
import { db, auth } from '../../../../firebase'

const fectchGetTasks = () => (dispatch, getState) => {
    let user = auth.currentUser
    
    db.collection("users").doc(user.uid).collection("tasks").get()
        .then(query => {
            query.forEach((doc) => {
                // adds a task on the state for each task on the db
                dispatch(addTask({task: doc.data(), id: doc.id}))                 
            })
        }).catch(err => {
            console.log(err)
        })
}

export default fectchGetTasks