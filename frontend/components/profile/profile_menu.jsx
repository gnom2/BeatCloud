import React from "react";

const ProfileMenu = () => {
  return (
    <div className="profile-main-menu">
      <ul className="main-menu-list">
        <li className="profile-menu-item">
          <a id="list-item" href="">
            All
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Popular Tracks
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Tracks
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Albums
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Playlists
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item" href="">
            Reposts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
