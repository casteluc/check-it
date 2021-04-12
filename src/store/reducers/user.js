import signIn from '../../auth/signIn'
import signUp from '../../auth/signUp'

let initialState = {
    user: null
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