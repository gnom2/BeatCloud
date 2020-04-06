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
    this.props.action(user);
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
    return (
      <div className="session-container">
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.formType}</h2>
          <label>
            Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
