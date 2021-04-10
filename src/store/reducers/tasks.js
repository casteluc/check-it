/* eslint-disable import/no-anonymous-default-export */
let initialState = []

function nextTaskId(tasks) {
    const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1
}

function getCurrentTime() {
    return new Date()
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: nextTaskId(state),
                    content: action.payload.content,
                    createdTime: getCurrentTime(),
                    completed: false
                }
            ]

        default:
            return state
    }
}