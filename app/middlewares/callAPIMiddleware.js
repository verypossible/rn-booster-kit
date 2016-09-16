const typesAreValid = (types) => {
  return (
    Array.isArray(types) &&
    types.length === 3 &&
    types.every(type => typeof type === 'string')
  )
}

export default function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {},
      onSuccess = () => undefined,
    } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }


    if (!typesAreValid(types)) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }

    if (typeof onSuccess !== 'function') {
      throw new Error('Expected onSuccess to be a function.')
    }

    if (!shouldCallAPI(getState())) return

    const [ requestType, successType, failureType ] = types

    dispatch({ ...payload, type: requestType })

    return callAPI().then(
      response => {
        dispatch({...payload, type: successType, ...response })
        onSuccess()
      },
      error => dispatch({...payload, type: failureType, error })
    )
  }
}

