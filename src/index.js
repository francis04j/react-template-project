import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import history from './history';
import 'bootswatch/dist/darkly/bootstrap.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>, 
    document.getElementById('root'));
// registerServiceWorker();

