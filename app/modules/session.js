export const NAME = 'session'

const LOAD   = `${NAME}/LOAD`
const CREATE = `${NAME}/CREATE`
const UPDATE = `${NAME}/UPDATE`
const REMOVE = `${NAME}/REMOVE`

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
    case CREATE:
    case UPDATE:
    case REMOVE:
    default:
      return state
  }
}
