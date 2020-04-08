import React from "react";

import Home from "./home/home_container";
import Discover from './discover/discover_container'
import ModalContainer from "./modal/modal_container";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <ModalContainer />
    <AuthRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/discover" component={Discover} />
  </div>
);

export default App;
