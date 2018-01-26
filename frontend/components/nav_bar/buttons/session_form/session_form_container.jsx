import { connect } from "react-redux";

import { login, logout, signup } from "../../../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, nextProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: nextProps.type
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  const action = nextProps.type;

  return {
    processForm: user => dispatch(action(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
