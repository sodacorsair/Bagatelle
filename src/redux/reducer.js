import { combineReducers } from 'redux';
import { reducer as demoReducer } from './demo';
import { reducer as userReducer } from './user';
import { reducer as commonReducer } from './common';

export default combineReducers({
    demo: demoReducer,
    user: userReducer,
    common: commonReducer,
});