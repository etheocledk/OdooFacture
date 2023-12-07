import axios from 'axios'

const baseURL = {
  serverProd: 'https://sygmef.impots.bj/emcf/api/info',
  serverTest: 'https://developper.impots.bj/sygmef-emcf/api/info',
}

const axiosIns = axios.create({
  baseURL: baseURL.serverTest,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
})


axiosIns.interceptors.request.use(function (config) {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAyMDIyMzMxNDQ1ODV8VFMwMTAwMzI3MCIsInJvbGUiOiJUYXhwYXllciIsIm5iZiI6MTcwMTc2ODIwOCwiZXhwIjoxNzk2NDI1MjAwLCJpYXQiOjE3MDE3NjgyMDgsImlzcyI6ImltcG90cy5iaiIsImF1ZCI6ImltcG90cy5iaiJ9.4nyz9M7H_OjhgE1VSL88J3kZk86Jsg985bH8O0UIBOY`
  token ? config.headers.Authorization = `Bearer ${token}` : null
  return config

}, function (error) {
  return Promise.reject(error)
})


export default axiosIns