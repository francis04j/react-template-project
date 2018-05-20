import * as actionTypes from '../constants/actionTypes';

const initialState = {
    user: undefined,
    users: undefined
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_REQUEST:
            return {
                ...state,
                user: undefined
            };
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.data
            };
        case actionTypes.GET_USERS_REQUEST:
            return {
                ...state,
                users: undefined
            };
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.data
            };
        default:
            return state;
    }
};

export default userReducer;