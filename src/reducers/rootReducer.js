import { combineReducers } from 'redux';
import budget from './budgetReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    budget,
    user
});

export default rootReducer;
