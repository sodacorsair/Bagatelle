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
        default:
            return state;
    }
}
