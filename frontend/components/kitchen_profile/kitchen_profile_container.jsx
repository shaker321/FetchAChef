import { connect } from "react-redux";

import { fetchSingleKitchen } from "../../actions/kitchen_actions.js";

import KitchenProfile from "./kitchen_profile";

const mapStateToProps = (state) => ({
  fetchSingleKitchen
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleKitchen: (id) => dispatch(fetchSingleKitchen(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenProfile);
