import { connect } from "react-redux";

import { fetchAllKitchens } from "../../../actions/kitchen_actions.js";

import KitchenMap from "./kitchen_map.jsx";

const mapStateToProps = (state, location) => ({
  fetchAllKitchens
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllKitchens: () => dispatch(fetchAllKitchens())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenMap);
