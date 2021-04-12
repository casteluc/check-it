import { createAction, createReducer } from '@reduxjs/toolkit'
 
const initalState = {user: null}

export const signIn = createAction('auth/signIn')
export const signUp = createAction('auth/signUp')

export default createReducer(initalState, {
    [signIn.type]: (state, action) => ({...state, user: action.payload}),
    [signUp.type]: (state, action) => {
        console.log(action.payload)
        return ({...state, user: action.payload})
    },
})