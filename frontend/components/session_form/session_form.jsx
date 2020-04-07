import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.login(user)
      .then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const errorsLi = this.props.errors.map(error => <li className="error-list">{error}</li>)

    return (
      <div className="session-container">
        <form className="session-form">
          {errorsLi}
          <label className="session-email">
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Your Email"
            />
          </label>
          <label className="session-password">
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Your Password"
            />
          </label>
          
          <button className="session-form-btn" onClick={this.handleSubmit}>{this.props.formType}</button>
          <a href="">Demo User</a>
        </form>
      </div>
    );
  }
}

export default SessionForm;
