import {
  CHANGE_MSG_KEY
} from './constant'

const defaultState = {
  currentKey: 0
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case CHANGE_MSG_KEY:
      newState.currentKey = action.value
      return newState
    default:
      return newState
  }
}
