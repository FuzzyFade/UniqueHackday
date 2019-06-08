import axios from 'axios'

async function get(path) {
  const baseUrl = 'http://localhost:8081'
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

export {
  get
}
