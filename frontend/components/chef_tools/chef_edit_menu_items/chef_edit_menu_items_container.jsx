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
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createMenuItem: (menuItem) => dispatch(createMenuItem(menuItem)),
  deleteMenuItem: (id) => dispatch(deleteMenuItem(id)),
  fetchSingleChef: (id) => dispatch(fetchSingleChef(id))
});

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(ChefEditMenuItems);
