import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Discover from './discover';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});
const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Discover);