import * as constants from './constants'

export const login = () => ({
    type: constants.USER_LOGIN,
})

export const logout = () => ({
    type: constants.USER_LOGOUT,
})