import * as constants from './constants'

// state
const defaultState = {
    isLogin: false,
}

// reducer
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.USER_LOGIN:
            return { ...state, isLogin: true };
        case constants.USER_LOGOUT:
            return { ...state, isLogin: false };
        default:
            return state;
    }
}
