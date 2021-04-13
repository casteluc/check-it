import { createAction, createReducer } from '@reduxjs/toolkit'
import { nextTaskId, getCurrentTime } from './utils'
 
const initalState = []

export const addTask = createAction('tasks/addTask')
export const editTask = createAction('tasks/editTask')
export const deleteTask = createAction('tasks/deleteTask')
export const completeTask = createAction('tasks/completeTask')

export default createReducer(initalState, {
    [addTask.type]: (state, action) => [
        ...state,
        {
            id: nextTaskId(state),
            content: action.payload.content,
            // createdTime: getCurrentTime(),
            completed: false
        }
    ],

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
