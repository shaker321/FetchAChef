import { connect } from "react-redux";

import {
  fetchCart,
  removeFromCart
} from "../../../../actions/cart_actions.js";

import Cart from "./cart.jsx";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  cart: state.entities.cart,
  fetchCart,
  removeFromCart
});

const mapDispatchToProps = (dispatch) => ({
  fetchCart: (id) => dispatch(fetchCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
