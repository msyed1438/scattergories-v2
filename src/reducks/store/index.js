import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../ducks'

const middlewares = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Note: this API requires redux@>=3.1.0
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares))
)

export default store
