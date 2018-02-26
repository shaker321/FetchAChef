import React from "react";
import { Link } from "react-router-dom";

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      let dropDownMenuItems = [
        <li key="change-password">
          <Link to={ "/api/users/" + this.props.currentUser.id }
            className="drop-down-menu-item"
            >Change Password
          </Link>
        </li>,
        <li key="user-orders">
          <Link
            to={ "/api/users/" + this.props.currentUser.id + "/orders" }
            className="drop-down-menu-item"
            >User Orders
          </Link>
        </li>
      ];

      if (this.props.currentUser.kitchen && this.props.currentUser.chef) {
        dropDownMenuItems.push(
          <li key="chef-tools">
            <Link
              to={ "/api/chefs/" + this.props.currentUser.chef.id + "/chef_tools" }
              className="drop-down-menu-item"
              >Chef Tools
            </Link>
          </li>,
          <li key="kitchen-tools">
            <Link
              to={ "/api/kitchens/" + this.props.currentUser.kitchen.id + "/kitchen_tools" }
              className="drop-down-menu-item"
              >Kitchen Tools
            </Link>
          </li>
        );
      } else if (this.props.currentUser.kitchen) {
        dropDownMenuItems.push(
          <li key="kitchen-tools">
            <Link
              to={ "/api/kitchens/" + this.props.currentUser.kitchen.id + "/kitchen_tools" }
              className="drop-down-menu-item"
              >Kitchen Tools
            </Link>
          </li>
        );
      } else if (this.props.currentUser.chef) {
        dropDownMenuItems.push(
          <li key="chef-tools">
            <Link
              to={ "/api/chefs/" + this.props.currentUser.chef.id + "/chef_tools" }
              className="drop-down-menu-item"
              >Chef Tools
            </Link>
          </li>
        );
      }

      dropDownMenuItems.push(
        <li key="logout-button">
          <div
            onClick={ this.props.logout }
            className="drop-down-menu-item">
            Log Out
        </div>
      </li>
      );

      return (
        <div>
          <ul className="drop-down-menu">
            { dropDownMenuItems }
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default DropDownMenu;
