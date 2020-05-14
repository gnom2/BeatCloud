import React from "react";

const ProfileMenu = () => {
  return (
    <div className="profile-main-menu">
      <ul className="main-menu-list">
        <li className="profile-menu-item">
          <div id="list-item-1" href="">
            All
          </div>
        </li>
        <li className="profile-menu-item">
          <div id="list-item-2" href="#">
            Popular Tracks
          </div>
        </li>
        <li className="profile-menu-item">
          <div id="list-item-3" href="#">
            Tracks
          </div>
        </li>
        <li className="profile-menu-item">
          <div id="list-item-4" href="#">
            Albums
          </div>
        </li>
        <li className="profile-menu-item">
          <div id="list-item-5" href="#">
            Playlists
          </div>
        </li>
        <li className="profile-menu-item">
          <div id="list-item-6" href="#">
            Reposts
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
