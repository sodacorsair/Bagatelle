import * as constants from './constants'

// state
const defaultState = {
    isLogin: false,
    userid: 0,
    username: '',
    permission: 2,
}

// reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.USER_LOGIN || constants.USER_REGISTER:
            const { userid, username, permission } = action.payload;
            return { ...state, userid, username, permission, isLogin: true };
        case constants.USER_LOGOUT:
            return { userid: 0, username: '', permission: 2, isLogin: false };
        default:
            return state;
    }
}
