import {store} from '../index';

export const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOFF: 'LOGOFF',
    SET_USER: 'SET_USER'
}

export function login(payload){
    return {
        type: ACTIONS.LOGIN,
        payload
    }
}
export const logOff = () => {
    document.cookie = 'loggedIn=false; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    return store.dispatch({
        type: ACTIONS.LOGOFF
    }) 
}
export function setUser(payload){
    return {
        type: ACTIONS.SET_USER,
        payload
    }
}