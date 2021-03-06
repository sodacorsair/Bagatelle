import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import '@/style/index.less';
import { Provider } from 'react-redux';
import store from '@/redux';
import axios from '@/lib/axios';

React.Component.prototype.axios = axios;

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
}