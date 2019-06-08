import { combineReducers } from 'redux'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as sidebarReducer } from '../pages/sidebar/store'

const reducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  sidebar: sidebarReducer
})

export default reducer
