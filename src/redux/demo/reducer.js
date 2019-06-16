import * as constants from './constants'

// state
const defaultState = {
  count: 11
}

// reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DEMO_ADD_COUNT:
      console.log('click');
      return { ...state, count: ++state.count }
    default:
      return state
  }
}
