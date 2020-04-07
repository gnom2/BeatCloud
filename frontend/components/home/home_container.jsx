import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { login, signup } from '../../actions/session_actions';
import Home from './home';

const msp = ({ session }) => ({
    currentUser: session.currentUser
});
const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Home);