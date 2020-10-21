export const ACTIONS = {
    GET_TWEETS: 'GET_TWEETS',
    ADD_TWEET: 'ADD_TWEET'
}
//todo: add redux thunk 
export function getTweets(payload){
    return {
        type: ACTIONS.GET_TWEETS,
        payload
    }
}

export function addTweet(payload){
    return {
        type: ACTIONS.ADD_TWEET,
        payload
    }
}