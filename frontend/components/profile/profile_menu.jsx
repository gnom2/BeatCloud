import React from "react";

const ProfileMenu = () => {
  return (
    <div className="profile-main-menu">
      <ul className="main-menu-list">
        <li className="profile-menu-item">
          <a id="list-item-1" href="">
            All
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item-2" href="">
            Popular Tracks
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item-3" href="">
            Tracks
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item-4" href="">
            Albums
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item-5" href="">
            Playlists
          </a>
        </li>
        <li className="profile-menu-item">
          <a id="list-item-6" href="">
            Reposts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
