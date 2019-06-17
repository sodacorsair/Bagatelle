import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
    timeout: 20000
})

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.common['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },

    error => {
        message.error('bad request');
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    reponse => {
        return response.date;
    },

    error => {
        message.error(error.response.statusText)
        return Promise.reject(error);
    }
)

export default instance;