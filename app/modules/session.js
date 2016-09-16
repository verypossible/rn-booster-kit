export const NAME = 'session'

const REQUEST = `${NAME}/LOGIN_REQUEST`
const SUCCESS = `${NAME}/LOGIN_SUCCESS`
const ERROR = `${NAME}/LOGIN_ERROR`

const initialState = {
  email: null,
}

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        email: action.email,
        token: action.token
      }
    default:
      return state
  }
}

function parseResponse(response) {
  return response.data
}

function loginUser({ email, password }, onSuccess) {
  return {
    // this will be our signature for the middleware
    // types: [REQUEST_TYPE, SUCCESS_TYPE, ERROR_TYPE],
    types: [REQUEST, SUCCESS, ERROR],

    // additional data that we are passing onto the reducer
    // I'm not sure if this is necessary
    payload: { email, password },

    // here we determine if we should interact with the api
    // in the middleware it passes getStore() to this method
    shouldCallAPI: () => true,

    // this will typically be a fetch("...").then(parseTheData)
    callAPI: () => Promise.resolve({
      data: {
        user_id: 1234,
        token: "a token",
        email,
      }
    }).then(parseResponse),

    // a callback that can be used for navigation redirects or anything else
    // ex: const onSuccess = () => navigator.push({ screen: "Dashboard" })
    onSuccess,
  }
}

export const actions = {
  loginUser,
}
