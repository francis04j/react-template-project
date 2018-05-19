export const API_URL = process.env.WEB_API_URL;

const webApi = async request => {
    const { endpoint, method, params, data } = request;

    const headers = { 'Content-Type': 'application/json','Access-Control-Allow-Origin':true };
   let asdas= 'http://localhost/TheFalcon.WebApi/api/register/index'
    let url = asdas; // `${asdas}${endpoint}`;
    console.log(params);
    if (params) {
        const qs = new URLSearchParams(params);
        url += `?${qs.toString()}`;
    }

    let body;
    if (data) { // JSON.stringify(data);
        body = "";
    }

    try {
        const response = await fetch(url, { method, headers, body });
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};

        return {
            success: response.ok,
            statusCode: response.status,
            result
        };
    } catch (error) {
        return {
            success: false,
            error
        };
    }
};

export default webApi;
