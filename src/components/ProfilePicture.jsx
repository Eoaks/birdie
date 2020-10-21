import React from 'react';
import './css/ProfilePicture.css';

export default function ProfilePicture(props) {
    return (
        <div className="profile-pic-container">
            <div className="profile-pic-hover-effect"></div>
            <img src={props.src || `https://source.unsplash.com/400x200/?${props.username}`} alt="" />
        </div>
    )
}