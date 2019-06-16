import { combineReducers } from 'redux';
import { reducer as demoReducer } from './demo';

export default combineReducers({
    demo: demoReducer,
});