import { connect } from "react-redux";

import { createChef, fetchAllKitchens } from "../../actions/chef_actions.js";

import ChefSignUpForm from "./chef_sign_up_form.jsx";

const mapStateToProps = (state) => ({
  createChef,
  fetchAllKitchens,
  history,
  currentUser: state.session.currentUser,
  kitchens: state.entities.kitchens
});

const mapDispatchToProps = dispatch => ({
  createChef: (chef) => dispatch(createChef(chef))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChefSignUpForm);
