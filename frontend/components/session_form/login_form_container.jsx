import React from "react";
import { connect } from "react-redux";
import { login, receiveErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => ({
  errors: state.errors.session,
  formType: "Sign In",
});

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal()),
  setErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(msp, mdp)(SessionForm);
