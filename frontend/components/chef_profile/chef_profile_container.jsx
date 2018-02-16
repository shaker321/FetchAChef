import { connect } from "react-redux";

import { fetchSingleChef } from "../../actions/chef_actions.js";

import ChefProfile from "./chef_profile.jsx";

const mapStateToProps = (state) => ({
  fetchSingleChef,
  chefs: state.entities.chefs
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleChef: (id) => dispatch(fetchSingleChef(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChefProfile);
