import { combineReducers } from 'redux'

import tasksReducer from './reducers/tasks'
import userReducer from './reducers/user'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    user: userReducer,
}) 

export default rootReducer