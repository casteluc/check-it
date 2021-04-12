import { createStore, combineReducers } from 'redux'

import tasksReducer from './ducks/tasks'

const rootReducer = combineReducers({
    tasks: tasksReducer,
}) 

const store = () => createStore(rootReducer)

export default store

