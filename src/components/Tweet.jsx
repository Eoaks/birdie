import React from 'react';
import ProfilePicture from './ProfilePicture';
import './css/Tweet.css';
import moment from 'moment';

export default class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet-container">
                <div className="flex-r-v-center">
                    <ProfilePicture />
                    <h1 className="tweet-nickname">{this.props.nickname || 'User'}</h1>
                    <span className="tweet-handle">{this.props.handle || '@handle'}</span>
                    <span className="tweet-date">{this.props.date || moment('2020-06-12').fromNow(true)}</span>
                </div>
                <div className="tweet">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt laudantium autem nam sequi facere placeat mollitia perspiciatis, blanditiis voluptate tempore doloribus atque excepturi quisquam sed voluptatibus iste architecto quam!
                </div>
            </div>
        )
    }
}