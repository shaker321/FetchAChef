import { connect } from "react-redux";

import { fetchAllKitchens } from "../../../actions/kitchen_actions.js";
import { fetchSingleChef } from "../../../actions/chef_actions.js";

import ChefEditProfile from "./chef_edit_profile.jsx";

const mapStateToProps = (state) => ({
  fetchAllKitchens,
  fetchSingleChef,
  chefs: state.entities.chefs,
  kitchens: state.entities.kitchens,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllKitchens: (bounds) => dispatch(fetchAllKitchens(bounds)),
  fetchSingleChef: (id) => dispatch(fetchSingleChef(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChefEditProfile);
