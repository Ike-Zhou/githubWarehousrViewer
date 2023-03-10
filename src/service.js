import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

const ajax = axios.create({
  baseURL: isDev ? 'https://api.github.com' : '',
})

ajax.interceptors.request.use((config) => config)

ajax.interceptors.response.use((resp) => {
  console.log('resp:', (resp))
  if (resp.status === 200) {
    return resp.data
  }
  return {
    errMsg: 'unknown error',
  }
})

export const login = (userdata) => ajax.get(`/users/${userdata.username}`)

export const getRepos = (username) => ajax.get(`/users/${username}/repos`)

export const getDetaile = (username, reposName) => ajax.get(`/repos/${username}/${reposName}`)
