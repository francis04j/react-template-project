import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import connectWebApiMiddleware from '../middleware/connectWebApiMiddleware';

const middlewares = [
    thunk,
    connectWebApiMiddleware
];
const configureStore = () => createStore(rootReducer, applyMiddleware(...middlewares));

export default configureStore;
