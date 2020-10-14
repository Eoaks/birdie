import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import tweetReducer from './tweetReducer';

export default combineReducers({
    sessionReducer,
    tweetReducer
})