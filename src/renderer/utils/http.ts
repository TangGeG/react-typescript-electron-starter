import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://tyuan.co:3001',
  withCredentials: true,
})
