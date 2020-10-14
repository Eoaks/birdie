import {connect} from 'react-redux';
import Login from '../components/Login';

import { login } from '../redux/sessionActions';

export default connect(
    null,
    {
        login
    }
)(Login);