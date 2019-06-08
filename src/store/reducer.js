import { combineReducers } from 'redux'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as followReducer } from '../pages/follow/store'

const reducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  follow: followReducer
})

export default reducer
