import React from "react";
import { Link } from "react-router-dom";

class UserOrdersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  menuItem() {
    let title;

    this.props.kitchen.menu_items.forEach((item) => {
      if (item.id === this.props.menuItemId) {
        title = item.title;
      }
    });

    return title;
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
      <ul>
        <li>Order #: { this.props.orderNumber }</li>
        <li>Date: { this.makeDateHumanReadable(this.props.date) }</li>
        <li>From: <Link to={ "/api/kitchens/" + this.props.kitchen.id } className="link">{ this.props.kitchen.kitchen_name }</Link></li>
        <li>Order: { this.menuItem() }</li>
        <li>Total Price: ${ this.props.price }</li>
      </ul>
    );
  }

}

export default UserOrdersIndexItem;
