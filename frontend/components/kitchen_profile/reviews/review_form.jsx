import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      body: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const review = {
      review: {
        rating: this.state.rating,
        body: this.state.body,
        chef_id: this.props.chefId,
        user_id: this.props.currentUser.id
      }
    };

    this.props.createReview(review); // .then(this.clearText);
  }

  // clearText() {
  //   this.setState({
  //     body: "",
  //     rating: 0
  //   });
  // }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  submitButton() {
    if (this.props.currentUser && this.state.rating > 0 ) {
      return (
        <input
          className="review-form-submit"
          type="submit"
          id="post"
        />
      );
    } else {
      return (
        <input
          className="review-form-submit"
          type="submit"
          id="post"
          disable="disabled"
        />
      );
    }
  }

  render() {
    let disabled = "disabled";

    if (this.props.currentUser) {
      disabled = "";
    }

    return (
      <div className="review-form">
        <form onSubmit={ this.handleSubmit }>
          <label className="review-form-label">Post a Review</label>

          <br/>

          <select onChange={ this.update("rating") } className="review-form-rating">
            <option value="" disabled="disabled" selected="selected">Select a Rating</option>
            <option value="5">☆ ☆ ☆ ☆ ☆</option>
            <option value="4">☆ ☆ ☆ ☆</option>
            <option value="3">☆ ☆ ☆</option>
            <option value="2">☆ ☆</option>
            <option value="1">☆</option>
          </select>

          <br/>

          <textarea
            cols="70"
            rows="10"
            value={ this.state.body }
            placeholder="Tell us about your experience! (You must be logged in to post a review.)"
            className="review-form-body"
            onChange={ this.update("body") }
          >
          </textarea>

          <br/>

          { this.submitButton() }
        </form>
      </div>
    );
  }
}

export default ReviewForm;
