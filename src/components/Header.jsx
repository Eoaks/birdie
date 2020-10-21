import React, { Component } from 'react';
import './css/Header.css';
import { ReactComponent as Logo } from '../img/Twitter_Logo_Blue.svg';
import {ReactComponent as LogoutIcon} from '../img/logout.svg';
import {logOff} from '../redux/sessionActions';
import ajax from '../utils/ajax';

const Logout = () => {
    return <div className="logout" onClick={logOff}> <LogoutIcon /></div>
}

export default class Header extends Component {
    componentDidMount(){
        if(this.props.loggedIn && (Object.keys(this.props.user).length === 0 && this.props.user.constructor === Object)){
            ajax('users/get').then(response => this.props.setUser(response))
        }
    }
    render() {
        return this.props.isTouch ? (
            <>
                <header className="touch-header">
                    <Logo />
                    <h1>Inicio</h1>
                </header>
                <nav className="mobile-bottom-nav">
                    <Logo />
                    <Logo />
                    <Logo />
                </nav>
            </>

        ) : (
                <header className="desktop-header">
                    <Logo /> 
                    {this.props.loggedIn &&
                        <Logout />}
                </header>
            )
    }
}