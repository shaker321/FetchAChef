import { connect } from "react-redux";

import { login, logout } from "../../actions/session_actions.js";
import { fetchCart } from "../../actions/cart_actions.js";

import Buttons from "./buttons/buttons.jsx";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  cart: state.entities.cart,
  fetchCart,
  login
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  fetchCart: (id) => dispatch(fetchCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
