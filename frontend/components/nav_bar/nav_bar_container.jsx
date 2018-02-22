import { connect } from "react-redux";

import { login, logout } from "../../actions/session_actions.js";

import Buttons from "./buttons/buttons.jsx";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  login
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
