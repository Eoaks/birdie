import {connect} from 'react-redux';
import Header from '../components/Header';
import {setUser} from '../redux/sessionActions';

export default connect(
    state => ({
        user: state.sessionReducer.user,
        loggedIn: state.sessionReducer.loggedIn
    }),
    {
        setUser
    }
)(Header);