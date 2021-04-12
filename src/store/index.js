import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from './ducks/tasks'
import authReducer from './ducks/auth'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer,
    }
})

