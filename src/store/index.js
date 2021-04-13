import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import tasksReducer from './ducks/tasks'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    }
}, applyMiddleware(thunk))

