import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute } from "../util/route_util.jsx";

import SessionFormContainer from "./session_form/session_form_container.jsx";

const App = () => (
  <div>
    <h1>FetchAChef</h1>

    <Switch>
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
    </Switch>
  </div>
);

export default App;
