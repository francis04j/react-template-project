import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import connectWebApiMiddleware from '../middleware/connectWebApiMiddleware';

const configureStore = () => createStore(rootReducer, applyMiddleware(connectWebApiMiddleware));

export default configureStore;
