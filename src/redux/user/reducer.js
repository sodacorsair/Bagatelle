import * as constants from './constants'

// state
const defaultState = {
    userid: 0,
    username: '',
    permission: 3,
}

// reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.USER_LOGIN:
            return { ...action.payload };
        case constants.USER_LOGOUT:
            return { ...state, isLogin: false };
        case constants.USER_REGISTER:
            const { userid, username, permission } = action.payload;
            return { ...state, userid, username, permission };
        default:
            return state;
    }
}
