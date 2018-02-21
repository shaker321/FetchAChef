import { connect } from "react-redux";

import {
  fetchSingleKitchen,
  updateKitchen
} from "../../actions/kitchen_actions.js";

import {
  approveChef,
  denyChef,
  fetchAllChefs
} from "../../actions/chef_actions.js";

import KitchenTools from "./kitchen_tools.jsx";

const mapStateToProps = (state) => ({
  fetchSingleKitchen,
  fetchAllChefs,
  updateKitchen,
  approveChef,
  denyChef,
  kitchens: state.entities.kitchens,
  chefs: state.entities.chefs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleKitchen: (id) => dispatch(fetchSingleKitchen(id)),
  fetchAllChefs: (id) => dispatch(fetchAllChefs(id)),
  updateKitchen: (kitchen) => dispatch(updateKitchen(kitchen)),
  approveChef: (chef) => dispatch(approveChef(chef)),
  denyChef: (id) => dispatch(fetchSingleKitchen(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenTools);
