import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userParams: {
        email: "",
        password: "",
        age: "",
        gender: "",
        username: "",
        photoFile: null,
        photoUrl: "",
      },

      stage: "one",
      status: "none",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.handlePicUpload = this.handlePicUpload.bind(this);
    this.findFileInput = this.findFileInput.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.setErrors([]);
  }

  update(field) {
    switch (field) {
      case "email":
        return (e) =>
          this.setState({
            userParams: {
              email: e.currentTarget.value,
              password: this.state.userParams.password,
            },
          });
      case "password":
        return (e) =>
          this.setState({
            userParams: {
              password: e.currentTarget.value,
              email: this.state.userParams.email,
            },
          });
      case "age":
        return (e) =>
          this.setState({
            userParams: {
              password: this.state.userParams.password,
              email: this.state.userParams.email,
              age: e.currentTarget.value,
              username: this.state.userParams.username,
              photoFile: this.state.userParams.photoFile,
              photoUrl: this.state.userParams.photoUrl,
            },
          });
      case "username":
        return (e) =>
          this.setState({
            userParams: {
              password: this.state.userParams.password,
              email: this.state.userParams.email,
              age: this.state.userParams.age,
              username: e.currentTarget.value,
              photoFile: this.state.userParams.photoFile,
              photoUrl: this.state.userParams.photoUrl,
            },
          });
      default:
        break;
    }
  }

  handlePicUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    // debugger;
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          userParams: {
            photoFile: file,
            photoUrl: reader.result,
            email: this.state.userParams.email,
            password: this.state.userParams.password,
            age: this.state.userParams.age,
            username: this.state.userParams.username,
          },
        });
      };
      // debugger;
    } else {
      this.setState({ photoFile: null, photoUrl: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      age,
      gender,
      username,
      email,
      password,
      photoFile,
    } = this.state.userParams;
    const formData = new FormData();
    // debugger;
    formData.append("user[email]", email);
    formData.append("user[password]", password);
    formData.append("user[age]", age);
    formData.append("user[gender]", gender);
    formData.append("user[username]", username);
    formData.append("user[photo]", photoFile);
    // debugger;
    this.props.signup(formData).then(this.props.closeModal);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   debugger;
  //   const user = Object.assign({}, this.state.userParams);
  //   this.props.signup(user).then(this.props.closeModal);
  // }

  checkValidEmail(email) {
    // debugger;
    if (email.split("@").length === 2) {
      if (email.split(".").length === 2) {
        if (email.split("").indexOf("@") < email.split("").indexOf(".")) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  checkValidPassword(password) {
    if (password.length >= 6) {
      return true;
    }
    return false;
  }

  handleClick(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.userParams);
    // debugger;
    if (
      this.props.formType === "Create Account" &&
      this.state.stage === "one"
    ) {
      if (!this.checkValidEmail(this.state.userParams.email)) {
        this.setState({ stage: "one" });
        this.props.setErrors(["Enter a valid e-mail address"]);
      } else if (!this.checkValidPassword(this.state.userParams.password)) {
        this.setState({ stage: "one" });
        this.props.setErrors(["Password must be minimum 6 characters"]);
      } else {
        this.setState({
          stage: "two",
        });
      }
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

  findFileInput() {
    document.getElementById("file").click();
  }

  render() {
    const errorClass = this.props.errors.length
      ? "session-form-errors-active"
      : "session-form-errors";
    const errorId = this.props.errors.length
      ? "session-form-input-error-active"
      : "session-form-input-error";

    const stageOne = () => {
      return (
        <>
          <label className="session-email">
            <input
              id={errorId}
              type="email"
              value={this.state.userParams.email || ""}
              onChange={this.update("email")}
              placeholder="Your Email"
            />
          </label>
          <label className="session-password">
            <input
              id={errorId}
              type="password"
              value={this.state.userParams.password || ""}
              onChange={this.update("password")}
              placeholder="Your Password"
            />
          </label>
        </>
      );
    };

    const stageTwo = () => {
      return (
        <div className="session-detail-container">
          <div className="profile-picture-container">
            <div className="profile-picture-preview">
              <img
                src={this.state.userParams.photoUrl}
                alt=""
                onClick={this.findFileInput}
              />
              <button
                className="profile-picture-upload-btn"
                onClick={this.findFileInput}
              >
                <FontAwesomeIcon id="pic-icon" icon={faCamera} />
                Upload image
                <input type="file" id="file" onChange={this.handlePicUpload} />
              </button>
            </div>
          </div>

          <div className="profile-info-container">
            <div className="profile-age">
              <h2>Tell us your age</h2>
              <input
                type="text"
                onChange={this.update("age")}
                value={this.state.userParams.age || ""}
              />
            </div>
            <div className="profile-gender">
              <h2>Gender</h2>
              <select
                name="gender"
                id="gender"
                value={this.state.gender || ""}
                onChange={this.update("gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="neither">Prefer not to reveal</option>
              </select>
            </div>
            <label className="profile-username">
              Username <br />
              <input
                type="text"
                value={this.state.userParams.username}
                onChange={this.update("username")}
                placeholder="Artist Name/Username"
              />
            </label>
          </div>
        </div>
      );
    };

    return (
      <div className="session-container">
        <form className="session-form">
          {this.state.stage === "one" ? stageOne() : stageTwo()}

          <div className={errorClass}>{this.props.errors}</div>

          <button
            className="session-form-btn"
            onClick={
              this.state.stage === "one" ? this.handleClick : this.handleSubmit
            }
          >
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

// {this.state.stage === "one" ? stageOne() : stageTwo()}
