import { connect } from "react-redux";

import { fetchSingleKitchen } from "../../../../actions/kitchen_actions.js";

import KitchenIndex from "./kitchen_index.jsx";

const mapStateToProps = (state) => ({
  fetchSingleKitchen,
  kitchens: state.entities.kitchens
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleKitchen: (id) => dispatch(fetchSingleKitchen(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenIndex);
