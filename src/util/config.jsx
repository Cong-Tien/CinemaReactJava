import axios from "axios";

export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMyIsIkhldEhhblN0cmluZyI6IjA4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MDkxMjAwMDAwMCIsIm5iZiI6MTY1Mjg5MzIwMCwiZXhwIjoxNjgxMDU5NjAwfQ.YWfEjzumDyUA3XRRvMIkDiD1cOGgRKyAAeOTP3qTT2c'
export const TOKEN_USER = 'AccessToken'
export const DOAMIN_SOCKET = 'https://movienew.cybersoft.edu.vn'

export const USER_LOGIN = "USER_LOGIN"

export const http = axios.create({
    baseURL:"https://movienew.cybersoft.edu.vn/api/",
    timeout:30000
});

//Cấu hình request
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft:TOKEN,
        Authorization : "Bearer " + localStorage.getItem(TOKEN_USER)
        
    }
    return config
}, err => {
    console.log(err);
    return Promise.reject(err)
})