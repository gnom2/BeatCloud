import React from "react";

const UploadMenu = () => {
  return (
    <div className="profile-main-menu">
      <ul className="main-menu-list">
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Upload
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Your tracks
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Stats
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Pro Plans
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Pulse
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UploadMenu;
