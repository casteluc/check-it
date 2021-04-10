import { ADD_TODO } from '../actionTypes'

let id = 0
export const addTask = (todo) => ({
    type: ADD_TODO,
    payload: {
        content: todo.content,
    }
})