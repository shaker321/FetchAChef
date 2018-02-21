import merge from "lodash/merge";

import {
  RECEIVE_ALL_CHEFS,
  RECEIVE_SINGLE_CHEF
} from "../actions/chef_actions.js";

const chefsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_CHEFS:
      return action.chefs;
    case RECEIVE_SINGLE_CHEF:
      const newChef = { [action.chef.id]: action.chef };
      return Object.assign({}, state, newChef);
      // return merge({}, state, newChef);
    default:
      return state;
  }
};

export default chefsReducer;
