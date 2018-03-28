import * as APIUtil from "../util/session_api_util.js";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user).then(newUser => (
    dispatch(receiveCurrentUser(newUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (user) => (dispatch) => (
  APIUtil.login(user).then(loggedInUser => (
    dispatch(receiveCurrentUser(loggedInUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => (dispatch) => (
  APIUtil.logout().then(() => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const changePassword = (password) => (dispatch) => (
  APIUtil.changePassword(password).then((loggedInUser) => (
    dispatch(receiveCurrentUser(loggedInUser))
  ))
);
