import { connect } from "react-redux";

import {
  createMenuItem,
  deleteMenuItem,
  fetchSingleChef
} from "../../../actions/chef_actions.js";

import ChefEditMenuItems from "./chef_edit_menu_items";

const mapStateToProps = (state) => ({
  createMenuItem,
  deleteMenuItem,
  fetchSingleChef,
  chefs: state.entities.chefs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createMenuItem: (menuItem) => dispatch(createMenuItem(menuItem)),
  deleteMenuItem: (itemId) => dispatch(deleteMenuItem(itemId)),
  fetchSingleChef: (id) => dispatch(fetchSingleChef(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChefEditMenuItems);
