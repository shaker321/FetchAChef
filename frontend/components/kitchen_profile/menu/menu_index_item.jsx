import React from "react";
import { Link } from "react-router-dom";

class MenuIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="menu-index-item-content">
        <li className="menu-index-item-title">{ this.props.title }</li>
        <li className="menu-index-item-description">{ this.props.description }</li>
        <li className="menu-index-item-description">
          <Link
            to={ "/api/chefs/" + this.props.chef.id }
            className="link"
            >{ `Chef ${this.props.chef.first_name} ${this.props.chef.last_name}` }
          </Link>
        </li>
        <li className="menu-index-item-description">${ this.props.price } Per Serving</li>
      </ul>
    );
  }

}

export default MenuIndexItem;
