import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = (state) => ({
  errors: state.errors.session,
  formType: "Create Account",
});

const mdp = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
});

export default connect(msp, mdp)(SessionForm);
