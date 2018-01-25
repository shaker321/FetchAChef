import { connect } from "react-redux";

import NavBar from "./Nav_Bar";

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

export default connect(
  mapStateToProps
)(NavBar);
