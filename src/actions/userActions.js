import * as actionTypes from '../constants/actionTypes';

// action creators
// export const createUser2 = model => ({
//     endpoint: '/user/register',
//     method: 'POST',
//     data: model,
//     type: actionTypes.CREATE_USER_REQUEST
// });

export const createUser = model => ({
    endpoint: '/register',
    method: 'POST',
    data: model,
    types: [
        actionTypes.CREATE_USER_REQUEST,
        actionTypes.CREATE_USER_SUCCESS,
        actionTypes.CREATE_USER_FAILURE
    ]
});

export const getUser = id => ({
    types: [
        actionTypes.GET_USER_REQUEST,
        actionTypes.GET_USER_SUCCESS,
        actionTypes.GET_USER_FAILURE
    ],
    method: 'GET',
    endpoint: `/user/${encodeURIComponent(id)}`
});

export const getUsers = () => ({
    types: [
        actionTypes.GET_USERS_REQUEST,
        actionTypes.GET_USERS_SUCCESS,
        actionTypes.GET_USERS_FAILURE
    ],
    method: 'GET',
    endpoint: '/user'
});