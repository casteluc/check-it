export const addTask = (task) => ({
    type: 'tasks/addTask',
    payload: task.content
})

export const editTask = (task) => ({
    type: 'tasks/editTask',
    payload: {
        targetId: task.id,
        newContent: task.content,
    }
})

export const deleteTask = (id) => ({
    type: 'tasks/deleteTask',
    payload: {
        targetId: id,
    }
})

