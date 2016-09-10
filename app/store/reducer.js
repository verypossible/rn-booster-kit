import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// IMPORT_REDUCERS
import * as session from '../modules/session'

// COMBINE_REDUCERS
export default combineReducers({
  [session.NAME]: session.reducer,
  form: formReducer,
})
