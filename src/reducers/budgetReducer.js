import * as actionTypes from '../constants/actionTypes';

const initialState = {
    budget: undefined
};

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUDGET_REQUEST:
            return {
                ...state,
                budget: undefined
            };
        case actionTypes.GET_BUDGET_SUCCESS:
            return {
                ...state,
                budget: action.data
            };
        default:
            return state;
    }
};

export default budgetReducer;