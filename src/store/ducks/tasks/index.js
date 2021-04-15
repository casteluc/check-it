import { createAction, createReducer } from '@reduxjs/toolkit'
 
const initalState = []

export const addTask = createAction('tasks/addTask')
export const editTask = createAction('tasks/editTask')
export const deleteTask = createAction('tasks/deleteTask')
export const toggleCompleteTask = createAction('tasks/toggleCompleteTask')
export const clearTasks = createAction('tasks/clearTasks')

export default createReducer(initalState, {
    [addTask.type]: (state, action) => [...state, {...action.payload.task, id: action.payload.id}]
        .sort((a, b) => {
        return new Date(a.createdTime) - new Date(b.createdTime)
    }).reverse(),

    [editTask.type]: (state, action) => state.map(task => {
        if (task.id === action.payload.targetId) {
            return {...task, content: action.payload.content}
        }

        return task
    }),

    [deleteTask.type]: (state, action) => state.filter(task => task.id !== action.payload.targetId),

    [toggleCompleteTask.type]: (state, action) => state.map(task => {
        if (task.id === action.payload.targetId) {
            return {...task, completed: !task.completed}
        } else {
            return task
        }
    }),

    [clearTasks.type]: (state, action) => []
})
