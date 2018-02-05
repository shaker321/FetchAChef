import merge from "lodash/merge";

import {
  RECEIVE_SINGLE_KITCHEN,
  RECEIVE_ALL_KITCHENS
} from "../actions/kitchen_actions.js";

const kitchensReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch(action.type) {
    case RECEIVE_ALL_KITCHENS:
      return action.kitchens;
    case RECEIVE_SINGLE_KITCHEN:
      const newKitchen = { [action.kitchen.id]: action.kitchen };
      return merge({}, state, newKitchen);
    default:
      return state;
  }
};

export default kitchensReducer;
