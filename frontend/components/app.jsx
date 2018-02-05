import React from "react";
import { Route, Redirect, Link, HashRouter } from "react-router-dom";

import { AuthRoute } from "../util/route_util.jsx";

import BaseBar from "./base_bar/base_bar.jsx";
import MainPage from "./main_page/main_page.jsx";
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import SearchPageContainer from "./search/search_page_container.jsx";

const App = () => (
  <div className="page">
    <header>
      <Route path="/" component={ NavBarContainer }/>
    </header>

    <Route exact path="/" component={ MainPage } />
    <Route path="/api/kitchens" component={ SearchPageContainer } />

    <footer>
      <BaseBar/>
    </footer>
  </div>
);

export default App;
