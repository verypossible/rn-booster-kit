import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

// TODO: get env to match reality
const ENV = 'DEBUG'

import * as session from '../modules/session'

const rootReducer = combineReducers({
  [session.NAME]: session.reducer,
  form: formReducer,
})

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
