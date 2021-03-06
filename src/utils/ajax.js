import {logOff} from '../redux/sessionActions';

export default function(endpoint, {body, ...config} = {}) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const options = {
        method: body ? 'POST' : 'GET',
        credentials: 'include',
        headers: {
            ...headers,
            ...config.headers
        }
    }

    if (body) {
        options.body = JSON.stringify(body);
    }
    
    return window
        .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, options)
        .then(async (response) => {
            const data = await response.json();
            if (response.status === 401) {
                if(logOff && typeof logOff === 'function') {
                    logOff();
                }
                return Promise.reject('unauthorized')
            }
            if(response.ok) {
                return data;
            }
            return Promise.reject(data);
        });
}