import { combineReducers } from "redux";

import cartReducer from "./cart_reducer.js";
import chefsReducer from "./chefs_reducer.js";
import kitchensReducer from "./kitchens_reducer.js";

export default combineReducers({
  chefs: chefsReducer,
  kitchens: kitchensReducer,
  cart: cartReducer
});
