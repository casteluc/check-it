import { auth } from "../../firebase"

let initialState = {
    user: null
}

const signUp = (credentials) => {
    console.log("rntrou")
    auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then( res => {
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

        default:
            return state
    }
}