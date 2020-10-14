import React from 'react';
//components
import Login from '../containers/LoginContainer';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
//utils
import ajax from '../utils/ajax';
import {getCookieValue} from '../utils/functions';

export default class Home extends React.Component {
    constructor(){
        super();
        this.renderTweets = this.renderTweets.bind(this);
        this.getTweets = this.getTweets.bind(this);
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    componentDidMount(){
        this.getTweets();
    }

    getTweets() {
        ajax('tweets').then(response =>{
            this.props.getTweets(response)
        })
    }

    renderTweets(){
        if(this.props.tweets.length > 0) {
            return this.props.tweets.map( tweet => (
                <Tweet data={tweet} key={tweet._id}/>
            ))
        }
    }
    setLoggedIn() {
        this.setState({
            loggedIn: getCookieValue('loggedIn')
        })
    }
    render() {
        if(!this.props.loggedIn){
            return <Login setLoggedIn={this.setLoggedIn} />
        } 

        return (
            <>
                <NewTweet refresh={this.getTweets}/>
                {this.renderTweets()}
            </>
        )

    }
}