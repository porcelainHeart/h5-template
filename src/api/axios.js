import axios from 'axios'
import Qs from 'qs'

const instance = axios.create({
  baseURL: '/api/',
  timeout: 60000,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use((response) => {
  return response.data
})

export default {
  get: (url, params) => instance.get(url, { params }),
  put: (url, body) => instance.put(url, body),
  post: (url, body) => instance.post(url, body),
  patch: (url, body) => instance.patch(url, body),
  delete: (url, id) => instance.delete(url + id),
}
