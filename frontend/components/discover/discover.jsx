import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import {
  faChartBar,
  faUserFriends,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Discover = (props) => {
  return (
    <section className="discover">
      <div className="discover-nav">
        <NavBarContainer />
      </div>
      <section className="discover-main">
        <section className="discover-main-content-container">
          <></>
        </section>
        <div className="discover-sidebar">
          <SidebarContainer />
        </div>
      </section>
    </section>
  );
};

export default Discover;
