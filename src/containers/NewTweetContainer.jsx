import {connect} from 'react-redux';
import NewTweet from '../components/NewTweet';
import { addTweet } from '../redux/tweetActions';
import {logOff} from '../redux/sessionActions';

export default connect(
    null,
    {
        addTweet,
        logOff
    }
)(NewTweet);