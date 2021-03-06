import React from "react";

import Home from "./home/home_container";
import Discover from "./discover/discover_container";
import Profile from "./profile/profile_show_container";
import ModalContainer from "./modal/modal_container";
import TrackPlayerContainer from "./track/track_player/track_player_container";
import TrackShow from "./track/track_show_container";
import Upload from "./upload/upload_form_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

// const App = () => (
//   <div>
//     <div className="main-content">
//       <ModalContainer />

//       <Route exact path="/tracks/:trackId" component={TrackShow} />
//       <AuthRoute exact path="/" component={Home} />
//       <ProtectedRoute exact path="/upload" component={Upload} />
//       <ProtectedRoute exact path="/users/:userId" component={Profile} />
//       <ProtectedRoute exact path="/discover" component={Discover} />
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioPlayer = React.createRef();
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-content">
          <ModalContainer />

          <Route
            exact
            path="/tracks/:trackId"
            audioPlayer={this.audioPlayer}
            component={TrackShow}
          />
          <AuthRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/upload" component={Upload} />
          <ProtectedRoute
            exact
            path="/users/:userId"
            audioPlayer={this.audioPlayer}
            component={Profile}
          />
          <ProtectedRoute exact path="/discover" component={Discover} />
        </div>
        <TrackPlayerContainer audioPlayer={this.audioPlayer} />
      </div>
    );
  }
}

export default App;
