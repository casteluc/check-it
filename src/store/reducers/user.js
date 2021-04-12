import { auth } from "../../firebase"

let initialState = {
    user: null
}

const signUp = (credentials) => {
    auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then( res => {
            return res.user 
        }).catch( err => {
            console.log(err.code)
            console.log(err.message)
            return null
        })
}

const signIn = (credentials) => {
    auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then( res => {
            console.log(res.user)
            return res.user
        }).catch( err => {
            console.log(err.code)
            console.log(err.message)
            return null
        })
}

export default function tasksReducer(state = initialState, action) {
    switch(action.type) {
        case 'user/signUp':
            return {
                ...state,
                user: signUp(action.payload)
            }

        case 'user/signIn':
            return {
                ...state,
                user: signIn(action.payload)
            }
        default:
            return state
    }
}