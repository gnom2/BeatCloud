import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.setErrors([]);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === "Create Account") {
      this.props.signup(user).then(this.props.closeModal);
    } else {
      this.props.login(user).then(this.props.closeModal);
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = Object.assign({
      email: "demo@aol.com",
      password: "123456",
      username: "GNOMEE",
    });
    this.props.login(user).then(this.props.closeModal);
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    const errorClass = this.props.errors.length
      ? "session-form-errors-active"
      : "session-form-errors";
    const errorId = this.props.errors.length
      ? "session-form-input-error-active"
      : "session-form-input-error";

    const signupForm = () => {
      return (
        <label className="session-username">
          <input
            id={errorId}
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Your Artist Name/Username"
          />
        </label>
      );
    };

    return (
      <div className="session-container">
        <form className="session-form">
          <label className="session-email">
            <input
              id={errorId}
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Your Email"
            />
          </label>
          <label className="session-password">
            <input
              id={errorId}
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Your Password"
            />
          </label>
          {this.props.formType === "Create Account" ? signupForm() : null}

          <div className={errorClass}>{this.props.errors}</div>

          <button className="session-form-btn" onClick={this.handleSubmit}>
            {this.props.formType}
          </button>
          <div className="session-form-separator">
            <span>or</span>
          </div>
          <button className="session-form-btn" onClick={this.handleDemoSubmit}>
            Continue as Demo User
          </button>
        </form>
        <a id="help-link" href="">
          Need help?
        </a>
        <div id="disclaimer-info">
          We may use your email and devices for updates and tips on BeatCloud's{" "}
          <br />
          products and services, and for activities notifications. You can
          unsubscribe <br />
          for free at any time in your notification settings. <br />
          <br />
          We may use information you provide us in order to show you targeted
          ads as described in our{" "}
          <a id="privacy-link" href="">
            Privacy Policy
          </a>
        </div>
      </div>
    );
  }
}

export default SessionForm;
