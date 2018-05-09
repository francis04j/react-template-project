import * as actionTypes from '../constants/actionTypes';

const initialState = {
    user: undefined
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
        default:
            return state;
    }
};

export default userReducer;