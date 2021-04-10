import { createStore, combineReducers } from 'redux'

import tasksReducer from './reducers/tasks'

const reducers = combineReducers({
    tasks: tasksReducer,
}) 

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig