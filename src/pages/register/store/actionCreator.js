import {
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  ON_CHANGE_VERIFYCODE,
  ON_CHANGE_PHONE,
  SET_TOKEN,
  SET_STATUS,
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
export const onPhoneChangeAction = (value) => ({
  type: ON_CHANGE_PHONE,
  value
})
export const onVerifyChangeAction = (value) => ({
  type: ON_CHANGE_VERIFYCODE,
  value
})

export const setTokenAction = value => ({
  type: SET_TOKEN,
  value
})

export const setStatusAction = value => ({
  type: SET_STATUS,
  value
})

export const registerAsynAction = (username, password, vcode, phone) => {
  return dispatch => {
    let data = {
      username,
      password,
      vcode,
      phone,
    }
    new Promise(resolve => {
      let ret = post('/api/user/register', data, )
      resolve(ret)
    }).then(ret => {
      dispatch(setTokenAction(ret.data.token))
      dispatch(setStatusAction(ret.status))
    }).catch(err => {
      throw new Error(err)
    })
  }
}