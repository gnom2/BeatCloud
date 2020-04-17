import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons";

// function Modal({ modal, sessionErrors, closeModal, setErrors }) {
//   if (!modal) {
//     return null;
//   }
//   let component;
//   switch (modal) {
//     case "login":
//       component = <LoginFormContainer />;
//       break;
//     case "signup":
//       component = <SignupFormContainer />;
//       break;
//     default:
//       return null;
//   }

//   return (
//     <div className="modal-background" onClick={closeModal}>
//       <div id="exit-btn">
//         <div></div>
//         <FontAwesomeIcon id="exit-btn-icon" icon={faTimes} />
//       </div>
//       <div className="modal-child" onClick={(e) => e.stopPropagation()}>
//         {component}
//       </div>
//     </div>
//   );
// }

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
  }

  render() {
    const { modal, sessionErrors, closeModal, setErrors } = this.props;

    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case "login":
        component = <LoginFormContainer />;
        break;
      case "signup":
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div id="exit-btn">
          <div></div>
          <FontAwesomeIcon id="exit-btn-icon" icon={faTimes} />
        </div>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

export default Modal;
