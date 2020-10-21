import {ACTIONS} from './tweetActions';

const initialState = {
    tweets: []
}

export default function tweetReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_TWEETS:
            return {
                ...state,
                tweets: action.payload
            }
        case ACTIONS.ADD_TWEET:
            return {
                ...state,
                tweets: [action.payload, ...state.tweets]
            }
        default:
            return state;
    }
}