import { combineReducers } from 'redux'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as followingReducer } from '../pages/following/store'
import {reducer as registerReducer } from '../pages/register/store'
import { reducer as messageReducer } from '../pages/message/store'
import { reducer as collectionReducer } from '../pages/collection/store'
import { reducer as mineReducer } from '../pages/mine/store'

const reducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  following: followingReducer,
  message: messageReducer,
  collection: collectionReducer,
  register: registerReducer,
  mine: mineReducer
})

export default reducer
