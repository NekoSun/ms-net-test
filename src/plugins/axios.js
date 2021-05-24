import axios from 'axios'

axios.defaults.withCredentials = true // enable cookies

export const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:3000/`
    : `${document.location.protocol}//${window.location.hostname}/`,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": '*',
    Accept: 'application/json',
    // Authorization: {
    //   toString() {
    //     return `Bearer ${localStorage.getItem('user-token')}`
    //   },
    // },
  },
})
