import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middleWares = [thunk]
middleWares.push(logger)

export default createStore(rootReducer, applyMiddleware(...middleWares))
