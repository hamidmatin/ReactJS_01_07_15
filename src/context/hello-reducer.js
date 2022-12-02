import * as actionTypes from './action-types'

export const helloReducer = (state, action) => {
  console.log(state)
  console.log(action)

  switch (action.type) {
    case actionTypes.CHANGE_MESSAGE:
      return 'Message Changed'
    case actionTypes.CHANGE_MESSAGE_BY_PAYLOAD:
      return action.payload
    case actionTypes.ADD_MESSAGE_BY_PAYLOAD:
      return state + action.payload
    default:
      return state
  }
}
