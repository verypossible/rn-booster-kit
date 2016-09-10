import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducer'

// TODO: get env to match reality
const ENV = 'DEBUG'

const configMiddleware = () => {
  if (ENV === 'RELEASE') {
    return () => applyMiddleware(thunkMiddleware)
  }
  return () => applyMiddleware(thunkMiddleware, createLogger())
}

const configureStore = (initialState) => {
  const middleware = configMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    middleware(),
  )

  return store
}

export default configureStore
