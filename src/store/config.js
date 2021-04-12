import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import { logger } from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = [logger]

const store = () => {
    return createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(...middlewares))
    )
}

export default store