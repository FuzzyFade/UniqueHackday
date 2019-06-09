import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
} from './constants'

const defaultState = {
  token: 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTU2MDAyNTE5OCwiZXhwIjoxNTYwMzI1MTk4fQ.eyJpZCI6MiwiZXhwIjoxNTYwMzI1MTk4LCJ1c2VybmFtZSI6InRlc3QyIn0.krI4vRe4sgjROu_6A5VBvivZlm09B1Lclh3dMIU8mp6VzjrneZCiyXSNTANt_CWryeYJjFUl3BntctcGzuaeNQ',
  username: '孙翔宇',
  password: '',
  avatar: 2
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
    case SET_TOKEN:
      newState.token = action.value
      return newState
    default:
      return newState
  }
}
