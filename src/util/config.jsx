import axios from "axios";

export const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ0eXBlXCI6XCJhdXRoZW5cIixcInVzZXJuYW1lXCI6XCJsZXRpZW4xODEwMjAwMUBnbWFpbC5jb21cIn0iLCJpYXQiOjE2NzA3MTE5MDksImV4cCI6MTY3MDc0MDcwOX0.8KR8ha5VNA3lfQxhkIu_VtDNKNr7HsGzapL6s43mGHE'
export const TOKEN_USER = 'AccessToken'
export const DOAMIN_SOCKET = 'http://localhost:8080/lecongtien/api/tiendzsocket'
export const HOST_BE = 'http://localhost:8080/lecongtien/api/file'

export const USER_LOGIN = "USER_LOGIN"

export const http = axios.create({
    baseURL:"http://localhost:8080/lecongtien/api",
    timeout:30000
});

//Cấu hình request
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        //TokenCybersoft:TOKEN,
        Authorization : "Bearer " + (localStorage.getItem(TOKEN_USER) ? localStorage.getItem(TOKEN_USER) : TOKEN)
        //Authorization : "Bearer " + TOKEN
        
    }
    return config
}, err => {
    console.log(err);
    return Promise.reject(err)
})