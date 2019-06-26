import { combineReducers } from 'redux';
import { reducer as demoReducer } from './demo';
import { reducer as userReducer } from './user';

export default combineReducers({
    demo: demoReducer,
    user: userReducer,
});