import { connect } from "react-redux";

import { login, logout, signup } from "../../../../actions/session_actions.js";

import SessionForm from "./session_form";

const mapStateToProps = (state, nextProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: nextProps.type,
    toggle: nextProps.toggle,
    close: nextProps.close,
    demo: nextProps.demo,
    login
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  const formType = nextProps.type;
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
