let initialState = []

function nextTaskId(tasks) {
    const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1
}

function getCurrentTime() {
    return new Date()
}

export default function tasksReducer(state = initialState, action) {
    switch(action.type) {
        case 'tasks/addTask':
            return [
                ...state,
                {
                    id: nextTaskId(state),
                    content: action.payload,
                    createdTime: getCurrentTime(),
                    completed: false
                }
            ]
        case 'tasks/editTask':
            return state.map(task => {
                if (task.id === action.payload.targetId) {
                    task.content = action.payload.newContent
                    return task
                }

                return task
            })
        case 'tasks/deleteTask':
            return state.filter(task => {
                if (task.id !== action.payload.targetId) {
                    return task
                }
            })
        default:
            return state
    }
}