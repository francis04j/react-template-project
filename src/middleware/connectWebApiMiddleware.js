import webApi from '../utils/webApi';

const connectWebApiMiddleware = () => next => async action => {
    
    const {
        types,
        endpoint,
        method = 'GET',        
        params,
        data,
        onPayload = payload => payload
    } = action;

    if (!endpoint || !types || types.length !== 3) {
        return next(action);
    }

    const [requestType, successType, failureType] = types;

    next({ type: requestType });
    
    const response = await webApi({
        endpoint,
        method,        
        params,
        data
    });

    const responseType = response.success ? successType : failureType;

    return next({
        type: responseType,
        success: response.success,
        statusCode: response.statusCode,
        ...onPayload(response.result)
    });

};

export default connectWebApiMiddleware;