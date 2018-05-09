import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {    createUser  } from './actions/userActions';
import configureStore from './store/configureStore';

const store = configureStore();
console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

