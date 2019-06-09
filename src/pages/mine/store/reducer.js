import {POST_LIST} from "../../mine/store/constants";

const defaultState = {
  head_pic:2
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case POST_LIST:
      newState = action.value;
      return newState
    default:
      return newState
  }
}
