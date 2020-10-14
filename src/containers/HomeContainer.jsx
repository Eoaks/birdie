import {connect} from 'react-redux';
import Home from '../components/Home';
import {getTweets} from '../redux/tweetActions'

export default connect(
    state => ({
        user: state.sessionReducer.user,
        loggedIn: state.sessionReducer.loggedIn,
        tweets: state.tweetReducer.tweets
    }),
    {
        getTweets
    }
)(Home);