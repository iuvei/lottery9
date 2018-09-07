import axios from 'axios'
import qs from 'qs'

// 创建
let service = axios.create({
  baseURL: 'https://77f96301-5797-487e-90c2-b5938ba264fa.mock.pstmn.io/',
  timeout: 5000,
  headers: {
    /* post: {
      'Content-Type': 'application/json'
    } */
  }
})

// 请求拦截
service.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
})

// 响应拦截
service.interceptors.response.use(res => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res
}, error => {
  return Promise.reject(error)
})

export default service
