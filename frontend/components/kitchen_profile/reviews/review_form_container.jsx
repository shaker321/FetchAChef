import { connect } from "react-redux";

import { createReview } from "../../../actions/" "something";

import ReviewForm from "./review_form";

const mapStateToProp = (state) => ({
  currentUser: state.session.currentUser
  createReview
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenProfile);
