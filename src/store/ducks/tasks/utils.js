export function nextTaskId(tasks) {
    const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1
}

export function getCurrentTime() {
    return new Date()
}
