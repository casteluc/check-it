import fetchDeleteTask from "./fetchDeleteTask"

const fectchDeleteCompletedTasks = () => (dispatch, getState) => {
    let completedTasks = getState().tasks.filter(task => task.completed)
    
    completedTasks.forEach(task => {
        dispatch(fetchDeleteTask(task.id))
    })
}

export default fectchDeleteCompletedTasks