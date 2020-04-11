import { connect } from "react-redux";
import UploadForm from "./upload_form";
import { uploadTrack } from "../../actions/track_actions";
import { currentUser } from "../../util/selectors";
import { receiveErrors } from "../../actions/session_actions";

const msp = (state) => ({
  currentUserId: state.session.id,
  currentUser: currentUser(state),
  errors: state.errors.session,
});

const mdp = (dispatch) => ({
  uploadTrack: (formData) => dispatch(uploadTrack(formData)),
  setErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(msp, mdp)(UploadForm);
