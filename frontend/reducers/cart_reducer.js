import merge from "lodash/merge";

import { RECEIVE_CART } from "../actions/cart_actions.js";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CART:
      const newCart = { [action.cart.id]: action.cart };
      return merge({}, state, newCart);
    default:
      return state;
  }
};

export default cartReducer;
