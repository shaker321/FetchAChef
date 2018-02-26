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

  makeDateHumanReadable(date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = date.slice(0, 4);
    let month = months[parseInt(date.slice(5, 7)) - 1];
    let day = date.slice(8, 10);

    return `${month} ${day}, ${year}`;
  }

  render() {
    return (
      <ul className="review-index-item">
        { this.ratings()[this.props.rating - 1] }
        <li className="review-index-item-body">{ this.props.body }</li>
        <li className="review-index-item-username">{ this.props.username }</li>
        <li className="review-index-item-username">{ this.makeDateHumanReadable(this.props.createdAt) }</li>
      </ul>
    );
  }
}

export default ReviewIndexItem;
