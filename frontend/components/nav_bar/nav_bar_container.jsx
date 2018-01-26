import { connect } from "react-redux";

import { logout } from "../../actions/session_actions.js";

import Buttons from "./buttons/buttons.jsx";

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
