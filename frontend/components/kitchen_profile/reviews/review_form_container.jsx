import { connect } from "react-redux";

import { createReview } from "../../../actions/kitchen_actions.js";

import ReviewForm from "./review_form";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  createReview
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
