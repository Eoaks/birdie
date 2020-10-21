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
            // this.props.addTweet(response)
            this.setState(() => ({
                content: ''
            }))
            //refresh() will send a GET request for all tweets again
            //for now this is the best i managed, i need to find a way to populate the newly added tweet in the backend
            //in order to use it in addTweet()
            this.props.refresh()
        }).catch(err => {
            if (err === 'unauthorized') {
                //this is not needed anymore since it's fired on the ajax wrapper
                // if(this.props.logOff) this.props.logOff();
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