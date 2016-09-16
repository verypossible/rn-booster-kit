export const NAME = 'session'

const LOAD   = `${NAME}/LOAD`
const CREATE = `${NAME}/CREATE`
const UPDATE = `${NAME}/UPDATE`
const REMOVE = `${NAME}/REMOVE`
const LOGIN = `${NAME}/LOGIN`

const InitialState = {
  email: null,
}

export const reducer = (state = InitialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
      }
    case LOAD:
    case CREATE:
    case UPDATE:
    case REMOVE:
    default:
      return state
  }
}

const loginUser = (email) => dispatch => {
  if (email === 'invalid@email.com')
    return Promise.reject(email);

  dispatch({ type: LOGIN, email })

  return Promise.resolve(email);
}

export const actions = {
  loginUser,
}
