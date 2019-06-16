import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

let composeEnhancers;
if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose(thunk);
} else {
    composeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk, logger)));
}

const configureStore = (initialState = {}) => {
    const store = createStore(reducer, initialState, composeEnhancers);

    if (module.hot && process.env.NODE_ENV !== 'production') {
        module.hot.accept('./reducer', () => {
            console.log('replacing reducer...')
            const nextReducer = require('./reducer').default
            store.replaceReducer(nextReducer)
        })
    }

    return store;
}

export default configureStore();