import React from 'react';
import './css/ProfilePicture.css';

export default function ProfilePicture(props) {
    return (
        <div className="profile-pic-container">
            <div className="profile-pic-hover-effect"></div>
            <img src={props.src || 'http://picsum.photos/400/200'} alt="" />
        </div>
    )
}