import { connect } from "react-redux";

import { changePassword } from "../../actions/session_actions.js";

import ChangePasswordForm from "./change_password_form.jsx";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  changePassword
});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (password) => dispatch(changePassword(password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordForm);
