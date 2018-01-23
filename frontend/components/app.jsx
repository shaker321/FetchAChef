import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SessionFormContainer from "./session_form/session_form_container.jsx";

const App = () => (
  <div>
    <h1>FetchAChef</h1>

    <Switch>
      <Route path="/login" component={ SessionFormContainer } />
      <Route path="/signup" component={ SessionFormContainer } />
    </Switch>
  </div>
);

export default App;
