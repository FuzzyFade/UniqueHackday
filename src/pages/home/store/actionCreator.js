import {
  CHANGE_KEY,
  SET_IDEA_LIST
} from './constant'
import axios from 'axios'

export const changeCurrentKeyAction = value => ({
  type: CHANGE_KEY,
  value
})

export const setIdeaListAction = value => ({
  type: SET_IDEA_LIST,
  value
})

export const getIdeaInitAction = (token) => {
  return dispatch => {
    axios({
      method: 'get',
      url: 'https://star.exql.top/api/idea/crud',
      headers: {
        'Authorization': `Stars ${token}`
      }
    }).then(res => {
      console.log(res.data)
      dispatch(setIdeaListAction(res.data.data))
    }).catch(err => {
      throw new Error(err)
    })
  }
}