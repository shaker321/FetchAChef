import { combineReducers } from "redux";

import chefsReducer from "./chefs_reducer.js";
import kitchensReducer from "./kitchens_reducer.js";

export default combineReducers({
  chefs: chefsReducer,
  kitchens: kitchensReducer
});
