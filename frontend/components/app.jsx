import React from "react";
import { Switch, Route, Redirect, Link, HashRouter } from "react-router-dom";

import { AuthRoute } from "../util/route_util.jsx";

import BaseBar from "./base_bar/base_bar.jsx";
import CartContainer from "./nav_bar/buttons/cart/cart_container.jsx";
import ChangePasswordFormContainer from "./change_password_form/change_password_form_container.jsx";
import ChefProfileContainer from "./chef_profile/chef_profile_container.jsx";
import ChefSignUpFormContainer from "./chef_sign_up_form/chef_sign_up_form_container.jsx";
import ChefTools from "./chef_tools/chef_tools.jsx";
import KitchenProfileContainer from "./kitchen_profile/kitchen_profile_container.jsx";
import KitchenSignUpFormContainer from "./kitchen_sign_up_form/kitchen_sign_up_form_container.jsx";
import KitchenToolsContainer from "./kitchen_tools/kitchen_tools_container.jsx";
import MainPageContainer from "./main_page/main_page_container.jsx";
import NavBarContainer from "./nav_bar/nav_bar_container.jsx";
import SearchPage from "./search/search_page.jsx";
import UserOrdersContainer from "./user_orders/user_orders_container.jsx";

const App = () => (
  <div className="page">
    <header>
      <Route path="/" component={ NavBarContainer }/>
    </header>

    <Switch>
      <Route exact path="/" component={ MainPageContainer } />
      <Route exact path="/api/chefs/post" component={ ChefSignUpFormContainer } />
      <Route exact path="/api/chefs/:chef_id" component={ ChefProfileContainer } />
      <Route exact path="/api/chefs/:chef_id/chef_tools" component={ ChefTools } />
      <Route exact path="/api/kitchens/post" component={ KitchenSignUpFormContainer} />
      <Route exact path="/api/kitchens" component={ SearchPage } />
      <Route exact path="/api/kitchens/:kitchen_id" component={ KitchenProfileContainer } />
      <Route exact path="/api/kitchens/:kitchen_id/kitchen_tools" component={ KitchenToolsContainer } />
      <Route exact path="/api/users/:user_id" component={ ChangePasswordFormContainer } />
      <Route exact path="/api/users/:user_id/orders" component={ UserOrdersContainer} />
      <Route exact path="/api/users/:user_id/cart" component={ CartContainer } />
    </Switch>

    <footer>
      <BaseBar/>
    </footer>
  </div>
);

//add ensureloggedin to certain routes

export default App;
