import {get} from '../../../lib/common'
import {POST_LIST} from "../../mine/store/constants";

export const setList = (value) => ({
  type: POST_LIST,
  value
})

export const setListAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('/api/user/home', token);
      resolve(ret)
    }).then(ret => {
      dispatch(setList(ret.data));
    }).catch(err => {
      throw new Error(err)
    })
  }
}
