import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { receiveErrors } from "../../actions/session_actions";
import Modal from "./modal";

const msp = (state) => {
  return {
    modal: state.ui.modal,
    sessionErrors: state.errors.session,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    setErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(msp, mdp)(Modal);
