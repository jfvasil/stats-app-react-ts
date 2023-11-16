import axios from 'axios'

// const BASE_URL = 'http://localhost:3000'
const BASE_URL = 'http://3.15.0.99:8080/'

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})
