import { combineReducers } from 'redux'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as mineReducer } from '../pages/mine/store'

const reducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  mine: mineReducer
})

export default reducer
