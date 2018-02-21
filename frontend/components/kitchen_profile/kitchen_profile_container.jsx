import { connect } from "react-redux";

import { addToCart } from "../../actions/cart_actions.js";
import { fetchSingleKitchen } from "../../actions/kitchen_actions.js";

import KitchenProfile from "./kitchen_profile.jsx";

const mapStateToProps = (state) => ({
  fetchSingleKitchen,
  kitchens: state.entities.kitchens,
  currentUser: state.session.currentUser,
  addToCart
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleKitchen: (id) => dispatch(fetchSingleKitchen(id)),
  addToCart: (userId, item, kitchen) => dispatch(addToCart(userId, item, kitchen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenProfile);
