import React from "react";
import { Link } from "react-router-dom";

class MenuIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li className="menu-index-item-title">{ this.props.title }</li>
        <li className="menu-index-item-description">{ this.props.description }</li>
        <li className="menu-index-item-title">
          <Link to={ "/api/chefs/" + this.props.chefId } className="link">{ `${this.props.chef.first_name} ${this.props.chef.last_name}` }</Link>
        </li>
        <li className="menu-index-item-title">${ this.props.price } Per Serving</li>
      </ul>
    );
  }

}

export default MenuIndexItem;
