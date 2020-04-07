import React from 'react';

const NavBar = props => {

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
                    <input type="search" placeholder="Search" />
                </div>
                <div className="nav-bar-right">
                    <div className="nav-bar-right-wrapper">
                        <button className="nav-upload-button">Upload</button>
                        <div className="nav-bar-profile-icon">
                            <button>User</button>
                            <img src="https://getdrawings.com/free-icon-bw/three-dots-icon-1.png" alt=""/>
                            <button onClick={props.logout}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar;