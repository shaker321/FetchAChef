import { connect } from "react-redux";

import { logout } from "../../../../actions/session_actions.js";

import DropDownMenu from "./drop_down_menu.jsx";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    logout
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDownMenu);
