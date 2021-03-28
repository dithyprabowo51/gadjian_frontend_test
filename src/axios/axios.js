import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api/?results=28'
})

export default axiosInstance