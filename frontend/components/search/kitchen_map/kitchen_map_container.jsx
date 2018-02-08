import { connect } from "react-redux";

import { fetchAllKitchens } from "../../../actions/kitchen_actions.js";

import KitchenMap from "./kitchen_map.jsx";

const mapStateToProps = (state) => ({
  fetchAllKitchens,
  kitchens: Object.values(state.entities.kitchens),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllKitchens: (bounds) => dispatch(fetchAllKitchens(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenMap);
