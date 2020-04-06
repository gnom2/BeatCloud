import React from "react";

import SignUp from "./session_form/signup_form_container";
import LogIn from "./session_form/login_form_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <h1>BeatCloud</h1>
    <Switch>
      <AuthRoute exact path="/login" component={LogIn} />
      <AuthRoute exact path="/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;
