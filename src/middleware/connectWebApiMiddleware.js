import api from '../utils/WebApi';

const connectWebApiMiddleware = () => next => async action => {

    const {
        types,
        endpoint,
        method = 'GET',        
        params,
        data,
        onPayload = payload => payload
    } = action;

    if (!endpoint) {
        return next(action);
    }
    
    const response = await api({
        endpoint,
        method,        
        params,
        data
    });

    return next({
        success: response.success,
        statusCode: response.statusCode,
        ...onPayload(response.result)
    });

};

export default connectWebApiMiddleware;