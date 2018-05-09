import * as actionTypes from '../constants/actionTypes';

export const getBudget = () => ({
    endpoint: '/budget',
    method: 'GET',
    types: [
        actionTypes.GET_BUDGET_REQUEST,
        actionTypes.GET_BUDGET_SUCCESS,
        actionTypes.GET_BUDGET_FAILURE
    ]
});
