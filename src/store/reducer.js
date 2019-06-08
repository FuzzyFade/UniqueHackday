import { combineReducers } from 'redux'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as followReducer } from '../pages/follow/store'
import { reducer as messageReducer } from '../pages/message/store'

const reducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  follow: followReducer,
  message: messageReducer
})

export default reducer
