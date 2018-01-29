import { connect } from "react-redux";

import { login, logout, signup } from "../../../../actions/session_actions.js";

import DropDownMenu from "./drop_down_menu.jsx";


const mapStateToProps = (state, nextProps) => {
  return {
    currentUser: state.session.currentUser,
    logout
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDownMenu);
