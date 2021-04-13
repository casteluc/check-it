const createTask = (content) => ({
    content,
    createdTime: Date.now(),
    completed: false
})

export default createTask 