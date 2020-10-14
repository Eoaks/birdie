import React from 'react';
import ajax from '../utils/ajax'

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    
    login = (e) => {
        e.preventDefault();
        ajax('users/login', {
            body: this.state
        })
        .then(response => {
            this.props.setLoggedIn();            
        });
    }

    handleInputChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleInputChange} placeholder="user"/>
                    <input type="password"id="password" value={this.state.password} onChange={this.handleInputChange}  placeholder="password"/>
                    <button type="submit">Submits</button>
                </form>
            </div>
        )
    }
}