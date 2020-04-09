import React from "react";

import Home from "./home/home_container";
import Discover from "./discover/discover_container";
import Track from "./track/track_form_container";
import ModalContainer from "./modal/modal_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <div className="main-content">
      <ModalContainer />
      <AuthRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/discover" component={Discover} />
      <Route exact path="/tracks/:trackId" component={Track} />
    </div>
  </div>
);

export default App;
