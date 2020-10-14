export const ACTIONS = {
    GET_TWEETS: 'GET_TWEETS',
}
//todo: add redux thunk 
export function getTweets(payload){
    return {
        type: ACTIONS.GET_TWEETS,
        payload
    }
}