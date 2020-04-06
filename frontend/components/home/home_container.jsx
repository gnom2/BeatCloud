import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Home from './home';

const msp = ({ session }) => ({
    currentUser: session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Home);