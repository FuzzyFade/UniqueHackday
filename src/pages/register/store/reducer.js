import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  ON_CHANGE_PHONE,
  SET_TOKEN,
  ON_CHANGE_VERIFYCODE,
  SET_STATUS,
} from './constants'

const defaultState = {
  token: '',
  username: '',
  password: '',
  phone: '',
  vcode: ''
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case ON_CHANGE_USERNAME:
      newState.username = action.value
      return newState
    case ON_CHANGE_PASSWORD:
      newState.password = action.value
      return newState
    case ON_CHANGE_PHONE:
      newState.phone = action.value
      return newState
    case ON_CHANGE_VERIFYCODE:
      newState.vcode = action.value
      return newState
    case SET_TOKEN:
      newState.token = action.value
      return newState
    default:
      return newState
  }
}
