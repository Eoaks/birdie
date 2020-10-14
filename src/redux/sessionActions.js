import {store} from '../index';

export const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOFF: 'LOGOFF'
}

export function login(payload){
    return {
        type: ACTIONS.LOGIN,
        payload
    }
}

export const logOff = () => {
    return store.dispatch({
        type: ACTIONS.LOGOFF
    }) 
}