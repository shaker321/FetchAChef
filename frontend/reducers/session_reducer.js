import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
      // return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
