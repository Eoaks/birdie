import React from 'react';
import ProfilePicture from './ProfilePicture';
import './css/Tweet.css';
import { formatDistance } from 'date-fns'

export default class Tweet extends React.Component {
    render() {
        let {content, createdAt, created_by: {username}} = this.props.data;
        return (
            <div className="tweet-container">
                <ProfilePicture />
                <div>
                    <div className="flex-r-v-center">
                        <h1 className="tweet-nickname">{username|| 'User'}</h1>
                        <span className="tweet-handle">{username || '@handle'}</span>
                        <span className="tweet-date">{ formatDistance(new Date(createdAt), new Date()) }</span>
                    </div>
                    <div className="tweet-content"> {content} </div>
                </div>
            </div>
        )
    }
}