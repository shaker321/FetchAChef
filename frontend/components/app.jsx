import React from "react";
import { Route, Redirect, Link, HashRouter } from "react-router-dom";

import { AuthRoute } from "../util/route_util.jsx";

import BaseBar from "./base_bar/base_bar.jsx";
import ChefSignUpFormContainer from "./chef_sign_up_form/chef_sign_up_form_container.jsx";
import KitchenProfileContainer from "./kitchen_profile/kitchen_profile_container.jsx";
import KitchenSignUpFormContainer from "./kitchen_sign_up_form/kitchen_sign_up_form_container.jsx";
import MainPageContainer from "./main_page/main_page_container.jsx";
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import SearchPage from "./search/search_page.jsx";

const App = () => (
  <div className="page">
    <header>
      <Route path="/" component={ NavBarContainer }/>
    </header>

    <Route exact path="/" component={ MainPageContainer } />
    <Route exact path="/api/kitchens" component={ SearchPage } />
    <Route path="/api/kitchens/:kitchenId" component={ KitchenProfileContainer } />
    <Route path="/api/chefs/post" component={ ChefSignUpFormContainer } />
    <Route path="/api/kitchens/post" component={ KitchenSignUpFormContainer} />

    <footer>
      <BaseBar/>
    </footer>
  </div>
);

//add ensureloggedin to certain routes

export default App;
