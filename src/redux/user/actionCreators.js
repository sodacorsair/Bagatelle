import * as constants from './constants'
import axios from '@/lib/axios';
import { message } from 'antd';

export const login = (params) => {
    return dispatch =>
        axios.post('/login', params)
            .then(res => {
                if (res.code === 200) {
                    dispatch({ type: constants.USER_LOGIN, payload: { userid: res.userid, username: res.username, permission: res.permission } });
                } else {
                    message.error(res.message);
                }
            })
}

export const logout = () => ({
    type: constants.USER_LOGOUT,
})

export const register = params => {
    return dispatch =>
        axios.post('/register', params)
            .then(res => {
                if (res.code === 200) {
                    dispatch({ type: constants.USER_LOGIN, payload: { userid: res.userid, username: res.username, permission: res.permission } });
                } else {
                    message.error(res.message);
                }
            })
}