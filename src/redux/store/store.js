import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import { userReducer } from '../reducers/userReducer.js'

export const store = createStore(userReducer, applyMiddleware(thunk))