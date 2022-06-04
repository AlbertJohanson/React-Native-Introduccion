import axios from  'axios'

export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api',
    headers:    {
        'Content-Type': 'application/json'
    },
})