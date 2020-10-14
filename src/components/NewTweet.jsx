import React from 'react';
import './css/NewTweet.css';

export default class NewTweet extends React.Component {

    handleChange = (e) => {
        console.log(e.target)
        // this.setState({input: e.target.value})
    }

    render() {
        return (
            <div className="new-tweet-container">
                <div className="input-container">
                    <div className="input"
                        contentEditable="true" 
                        data-text="Enter text here"
                        onChange={this.handleChange}
                        ></div>
                </div>
                <button className="new-tweet-btn">Send</button>
            </div>
        )
    }
}