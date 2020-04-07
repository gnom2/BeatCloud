import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = state => ({
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchTracks: () => dispatch(fetchTracks())
})

export default connect(msp, mdp)(NavBar);
