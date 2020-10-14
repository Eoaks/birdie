import React from 'react';
import './css/NewTweet.css';
import ajax from '../utils/ajax';

export default class NewTweet extends React.Component {
    constructor(){
        super();
        this.state = {
            content: ''
        }
        this.submitNewTweet = this.submitNewTweet.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    submitNewTweet() {
        ajax('tweets/new', {
            body: {
                content: this.state.content
            }
        }).then( response => {
            //todo: implement redux and create an action to update in client without an extra request
            this.props.refresh()
        }).catch(err => {
            if (err === 'unauthorized') {
                //todo: implement redux and create unauth() function to handle log-of when token is invalid
                if(this.props.unauth) this.props.unauth();
            }
        })
    }
    render() {
        return (
            <div className="new-tweet-container">
                <div className="input-container">
                    {/* <div className="input"
                        contentEditable="true" 
                        data-text="Enter text here"
                        onChange={this.handleChange}
                        ></div> */}
                    <textarea cols="60" rows='4' 
                        maxLength="128" 
                        placeholder="Tweet something!"
                        onChange={this.handleChange}
                        value={this.state.content}
                    ></textarea>
                </div>
                <button disabled={this.state.content.length < 1} className="new-tweet-btn" onClick={this.submitNewTweet}>Send</button>
            </div>
        )
    }
}