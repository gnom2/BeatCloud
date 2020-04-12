import React from "react";
import {
  faSignOutAlt,
  faSearch,
  faBell,
  faEnvelope,
  faEllipsisH,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown1: false,
      dropdown2: false,
    };

    this.handleDropdown1 = this.handleDropdown1.bind(this);
    this.handleDropdown2 = this.handleDropdown2.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleDropdown1() {
    if (this.state.dropdown1) {
      this.setState({ dropdown1: false });
    } else {
      if (this.state.dropdown2) {
        this.setState({ dropdown1: true, dropdown2: false });
      } else {
        this.setState({ dropdown1: true });
      }
    }
  }

  handleDropdown2() {
    if (this.state.dropdown2) {
      this.setState({ dropdown2: false });
    } else {
      if (this.state.dropdown1) {
        this.setState({ dropdown2: true, dropdown1: false });
      } else {
        this.setState({ dropdown2: true });
      }
    }
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    const { currentUser, openModal } = this.props;
    const dropBtn1 = this.state.dropdown1
      ? "nav-bar-profile-icon-active"
      : "nav-bar-profile-icon";

    const dropBtn2 = this.state.dropdown2
      ? "nav-profile-button-active"
      : "nav-profile-button";

    const dropdown1 = () => {
      return (
        <div className="nav-dropdown-menu" onClick={this.handleDropdown1}>
          <button onClick={this.handleLogout}>
            <span id="logout-icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
            Sign Out
          </button>
        </div>
      );
    };

    const dropdown2 = () => {
      return (
        <div className="nav-dropdown-menu-alt" onClick={this.handleDropdown2}>
          <div className="nav-profile-btn">
            <span id="profile-icon">
              <FontAwesomeIcon icon={faUserFriends} />
            </span>
            <Link
              className="format-link"
              to={`/users/${this.props.currentUser.id}`}
            >
              Profile
            </Link>
          </div>
          <div className="nav-linkedin-btn">
            <span id="linkedin-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <a
              className="format-link"
              href="https://www.linkedin.com/in/jun-hyeok-scott-lee-18a62851/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      );
    };

    return (
      <header className="nav-bar">
        <div className="nav-bar-container">
          <div className="nav-bar-left">
            <div className="nav-bar-logo">
              <img
                src="https://i.imgur.com/BCzHuKk.png"
                height="40"
                width="40"
              ></img>
            </div>
            <div className="nav-bar-left-wrapper">
              <button className="nav-discover-button">
                <Link className="format-link" to={`/discover`}>
                  Home
                </Link>
              </button>
              <button className="nav-stream-button">Stream</button>
              <button className="nav-library-button">Library</button>
            </div>
          </div>
          <div className="nav-bar-middle">
            <input type="search" placeholder="Search" results="0" />
            <button className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="nav-bar-right">
            <div className="nav-bar-right-wrapper">
              <button className="nav-github-button">
                <a href="http://www.github.com/gnom2/BeatCloud">Github</a>
              </button>
              <button className="nav-upload-button">
                <Link className="format-link" to={`/upload`}>
                  Upload
                </Link>
              </button>
              <div className={dropBtn2} onClick={this.handleDropdown2}>
                <span>{currentUser.username}</span>

                {this.state.dropdown2 ? dropdown2() : null}
              </div>
              <div className="nav-bar-icon-wrapper">
                <button className="nav-bar-notification-icon">
                  <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="nav-bar-mail-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <div className={dropBtn1} onClick={this.handleDropdown1}>
                  <FontAwesomeIcon icon={faEllipsisH} />
                  {this.state.dropdown1 ? dropdown1() : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
