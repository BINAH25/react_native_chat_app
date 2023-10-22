import axios from "axios";

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/',
    headers: {
        'Content-Type':'application/json'
    }
})

export let BASE_API_URI = 'http://127.0.0.1:8000/';

export default api