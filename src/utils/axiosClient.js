import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1'

export const userAPI = axios.create({
  baseURL: `${baseUrl}/users`
})