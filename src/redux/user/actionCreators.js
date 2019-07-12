import * as constants from './constants'
import axios from '@/lib/axios';

export const login = (params) => {
    axios.post('/login', params)
        .then(res => {
            dispatch({ type: constants.USER_LOGIN, payload: { userid: res.userid, username: res.username, permission: res.permission } })
        })
}

export const logout = () => ({
    type: constants.USER_LOGOUT,
})

export const register = params => {
    return dispatch =>
        axios.post('/register', params)
            .then(res => {
                console.log(res.Username);
                dispatch({ type: constants.USER_LOGIN, payload: { userid: res.userid, username: res.username, permission: res.permission } })
            })
            .catch(res => {
                console.log("failure")
            })
}