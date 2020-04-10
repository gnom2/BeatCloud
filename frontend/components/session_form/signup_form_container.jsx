import { connect } from "react-redux";
import React from "react";
import { signup, login, receiveErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => ({
  errors: state.errors.session,
  formType: "Create Account",
});

const mdp = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  openModal: () => dispatch(openModal("signup")),
  closeModal: () => dispatch(closeModal()),
  setErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(msp, mdp)(SessionForm);
