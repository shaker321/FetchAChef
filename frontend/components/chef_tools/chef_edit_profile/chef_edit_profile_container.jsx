import { connect } from "react-redux";

import { fetchAllKitchens } from "../../../actions/kitchen_actions.js";
import { fetchSingleChef, updateChef } from "../../../actions/chef_actions.js";

import ChefEditProfile from "./chef_edit_profile.jsx";

const mapStateToProps = (state) => ({
  fetchAllKitchens,
  fetchSingleChef,
  updateChef,
  chefs: state.entities.chefs,
  kitchens: state.entities.kitchens,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllKitchens: (bounds) => dispatch(fetchAllKitchens(bounds)),
  fetchSingleChef: (id) => dispatch(fetchSingleChef(id)),
  updateChef: (chef) => dispatch(updateChef(chef))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChefEditProfile);
