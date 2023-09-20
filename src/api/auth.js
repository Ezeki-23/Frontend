import axios from './axios'

const API = 'https://backend-ezeki-dev.vercel.app/api'

export const registerRequest = async (user) => axios.post(`${API}/register`, user)

export const loginRequest = async (user) => axios.post(`${API}/login`, user)

export const verifyTokenRequest = async () => axios.get(`${API}/verify`)
