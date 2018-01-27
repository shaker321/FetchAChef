import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import { AuthRoute } from "../util/route_util.jsx";

import BaseBar from "./base_bar/base_bar.jsx";
import MainPage from "./main_page/main_page.jsx";
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import SessionFormContainer from "./nav_bar/buttons/session_form/session_form_container.jsx";

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>

    <Switch>
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route path="/" component={ MainPage } />
    </Switch>

    <footer>
      <BaseBar/>
    </footer>
  </div>
);

export default App;
