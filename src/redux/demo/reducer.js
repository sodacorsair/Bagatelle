import * as constants from './constants'

// state
const defaultState = {
  count: 21,
  isLogin: false,
}

// reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DEMO_ADD_COUNT:
      return { ...state, count: ++state.count };
    case constants.DEMO_LOGIN:
      return { ...state, isLogin: true };
    case constants.DEMO_LOGINOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
}
