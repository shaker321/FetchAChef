import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  ratings() {
    return ([
      <li className="review-index-item-rating">☆</li>,
      <li className="review-index-item-rating">☆ ☆</li>,
      <li className="review-index-item-rating">☆ ☆ ☆</li>,
      <li className="review-index-item-rating">☆ ☆ ☆ ☆</li>,
      <li className="review-index-item-rating">☆ ☆ ☆ ☆ ☆</li>
    ]);
  }

  render() {
    return (
      <ul className="review-index-item">
        { this.ratings()[this.props.rating - 1] }
        <li className="review-index-item-body">{ this.props.body }</li>
        <li className="review-index-item-username">{ this.props.username }</li>
        <li className="review-index-item-username">{ this.props.createdAt }</li>
      </ul>
    );
  }
}

export default ReviewIndexItem;
