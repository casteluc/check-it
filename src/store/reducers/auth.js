let initialState = {
    authUser: null
}

export default function tasksReducer(state = initialState, action) {
    switch(action.type) {
        case 'auth/userSet':
            return {
                ...state,
                authUser: action.authUser
            }
        default:
            return state
    }
}