import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import configureStore from "./store/store";

import Root from "./components/root.jsx";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
