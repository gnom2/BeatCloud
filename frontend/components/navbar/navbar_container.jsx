import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchTracks: () => dispatch(fetchTracks())
})

export default connect(msp, mdp)(NavBar);
