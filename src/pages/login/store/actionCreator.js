import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
} from './constants'

// import {get} from '../../../lib/common'
import {post} from '../../../lib/common'

export const onUsernameChangeAction = (value) => ({
  type: ON_CHANGE_USERNAME,
  value
})

export const onPasswordChangeAction = (value) => ({
  type: ON_CHANGE_PASSWORD,
  value
})

export const setTokenAction = value => ({
  type: SET_TOKEN,
  value
})

export const loginAsynAction = (username, password) => {
  return dispatch => {
    let data = {
      username,
      password
    }
    new Promise(resolve => {
      let ret = post('/api/user/auth', data, )
      resolve(ret)
    }).then(ret => {
      dispatch(setTokenAction(ret.token))
    }).catch(err => {
      throw new Error(err)
    })
  }
}