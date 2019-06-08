import axios from 'axios'

async function get(path) {
  const baseUrl = 'https://star.exql.top'
  let url = baseUrl.concat(path)
  let ret = await new Promise(resolve => {
    axios({
      method: 'get',
      url
    })
    .then(res => resolve(res.data))
  })
  return ret
}

async function post(path, data, token) {
  const baseUrl = 'https://star.exql.top'
  let url = baseUrl.concat(path)
  let ret = await new Promise(resolve => {
    axios({
      method: 'post',
      url,
      data,
      headers: {'Authorization': `${token}`}
    })
    .then(res => resolve(res.data))
  })
  .then(ret => ret)
  return ret
}

export {
  get,
  post
}
