import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./app";
import BaseBar from "./base_bar/base_bar.jsx"

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
      <BaseBar/>
    </HashRouter>
  </Provider>
);

export default Root;
