import { connect } from "react-redux";

import { fetchAllKitchens } from "../../actions/kitchen_actions.js";

import UserOrders from "./user_orders.jsx";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  fetchAllKitchens,
  kitchens: state.entities.kitchens
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllKitchens: () => dispatch(fetchAllKitchens())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOrders);
