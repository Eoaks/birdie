import React, { Component } from 'react';
import './css/Header.css';
import { ReactComponent as Logo } from '../img/Twitter_Logo_Blue.svg';

export default class Header extends Component {
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
                </header>
            )
    }
}