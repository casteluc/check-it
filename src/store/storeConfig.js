import { createStore, combineReducers } from 'redux'

import tasksReducer from './reducers/tasks'

const reducers = combineReducers({
    tasks: tasksReducer,
}) 

const storeConfig = () => {
    return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default storeConfig