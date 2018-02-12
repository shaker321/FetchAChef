import { connect } from "react-redux";

import { createKitchen } from "../../actions/kitchen_actions.js";

import KitchenSignUpForm from "./kitchen_sign_up_form.jsx";

const mapStateToProps = (state) => ({
  createKitchen,
  history,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createKitchen: (kitchen) => dispatch(createKitchen(kitchen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenSignUpForm);
