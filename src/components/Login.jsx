import React from 'react';
import ajax from '../utils/ajax'
import './css/Login.css';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            showSignUp: false,
            error: false
        }
    }
    
    handleForm = (e) => {
        e.preventDefault();
        if(this.state.showSignUp) {
            this.signUp();
        } else {
            this.login();
        }
    }
    passwordsDontMatch(){
        if(this.state.password !== this.state.passwordConfirmation) {
            this.setState(state => ({error: true}))
            return true;
        }
        if(this.state.error) {
            this.setState(() => ({error: false}))
        }
        return false;
    }
    signUp = () => {
        if (this.passwordsDontMatch()) {
            return;
        }
        ajax('users/register', {
            body: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(response => {
            this.setState(() => ({
                username: '',
                password: '',
                passwordConfirmation: '',
                message: response
            }))
        }).catch(err => {
            this.setState(() => ({message: err.message}))
        })
    }

    login = () => {
        ajax('users/login', {
            body: this.state
        })
        .then(response => {
            this.props.login(response);            
        })
        .catch(err => console.log(err));
    }

    showSignUp = () => {
        this.setState(state => ({
            showSignUp: !state.showSignUp
        }))
    }

    handleInputChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render(){
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={this.handleForm}>
                    <input required type="text" id="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Username"/>
                    <input required className={this.state.error ? "error-input" : ''} type="password"id="password" value={this.state.password} onChange={this.handleInputChange}  placeholder="Password"/>
                    {this.state.showSignUp &&
                        <input className={this.state.error ? "error-input" : ''} type="password"id="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleInputChange}  placeholder="Confirm Password"/>
                    }
                    {this.state.error &&
                        <p>Passwords don't match</p>
                    }
                    {this.state.message &&
                        <p>{this.state.message}</p>
                    }
                    <button className="btn" type="submit">{this.state.showSignUp ? 'Sign-up' : 'Sign-in'}</button>
                    <button className="link-btn" onClick={this.showSignUp}>{this.state.showSignUp ? 'Go back' : 'Or sign-up'}</button>
                </form>
                
            </div>
        )
    }
}