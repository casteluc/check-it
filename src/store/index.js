import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from './ducks/tasks'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})

