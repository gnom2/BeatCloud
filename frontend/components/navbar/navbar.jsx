import React from 'react';
import { faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        }

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleDropdown() {
        this.state.dropdown ? this.setState({ dropdown: false }) : this.setState({ dropdown: true })
    }

    handleLogout() {
        this.props.logout();
    }

    render() {
        const { currentUser, openModal } = this.props;

        const dropdown = () => (
            <div className="nav-dropdown-menu" onClick={this.handleDropdown}>
                <button onClick={this.handleLogout}>
                    Sign Out
                    <span id="logout-icon">
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                        />
                    </span>
                </button>
            </div>
        );

        return (
            <header className="nav-bar">
                <div className="nav-bar-container">
                    <div className="nav-bar-left">
                        <div className="nav-bar-logo">
                            <img src="https://i.imgur.com/BCzHuKk.png" height="40" width="40"></img>
                        </div>
                        <div className="nav-bar-left-wrapper">
                            <button className="nav-discover-button">Home</button>
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
                            <button className="nav-github-button"><a href="http://www.github.com/gnom2/BeatCloud">Github</a></button>
                            <button className="nav-upload-button">Upload</button>
                            <button className="nav-profile-button">GNOMEE</button>
                            <div className="nav-bar-profile-icon">
                                <img className="dropbtn" src="https://onthisting.com/pics/dots.png" alt="" onClick={this.handleDropdown} />
                                {this.state.dropdown ? dropdown() : null}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;