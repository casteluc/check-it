import { createAction, createReducer } from '@reduxjs/toolkit'
 
const initalState = []

export const addTask = createAction('tasks/addTask')
export const editTask = createAction('tasks/editTask')
export const deleteTask = createAction('tasks/deleteTask')
export const completeTask = createAction('tasks/completeTask')

export default createReducer(initalState, {
    [addTask.type]: (state, action) => [...state, action.payload],

    [editTask.type]: (state, action) => state.map(task => {
        if (task.id === action.payload.targetId) {
            return {...task, content: action.payload.content}
        }

        return task
    }),

    [deleteTask.type]: (state, action) => state.filter(task => task.id !== action.payload.targetId),

    [completeTask.type]: (state, action) => state.map(task => {
        if (task.id === action.payload.targetId) {
            return {...task, completed: !task.completed}
        } else {
            return task
        }
    })
})
