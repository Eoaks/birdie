import {ACTIONS} from './sessionActions';
import {getCookieValue} from '../utils/functions';

const initialState = {
    user: {},
    loggedIn: getCookieValue('loggedIn') === 'true',
}

export default function sessionReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case ACTIONS.LOGOFF:
            return {
                ...state,
                loggedIn: false,
                user: {}
            }
        case ACTIONS.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}