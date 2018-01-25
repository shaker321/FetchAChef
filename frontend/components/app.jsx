import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute } from "../util/route_util.jsx";

import BaseBar from "./base_bar/base_bar.jsx";
import SessionFormContainer from "./session_form/session_form_container.jsx";

const App = () => (
  <div>
    <header>
      <h1>FetchAChef</h1>
    </header>

    <Switch>
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
    </Switch>

    <footer>
      <BaseBar/>
    </footer>
  </div>
);

export default App;
