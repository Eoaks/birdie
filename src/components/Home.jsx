import React from 'react';
//components
import Login from './Login';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
//utils
import ajax from '../utils/ajax';
import {getCookieValue} from '../utils/functions';

export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: getCookieValue('loggedIn'),
            tweets: []
        }        
        this.renderTweets = this.renderTweets.bind(this);
    }

    componentDidMount(){
        ajax('tweets').then(response =>{
            this.setState({tweets: response})
        })
    }

    renderTweets(){
        if(this.state.tweets.length > 0) {
            return this.state.tweets.map( tweet => (
                <Tweet data={tweet} key={tweet._id}/>
            ))
        }
    }

    render() {
        if(this.state.loggedIn !== 'true'){
            return <Login />
        } 

        return (
            <>
                <NewTweet />
                {/* {this.renderTweets()} */}
            </>
        )

    }
}