import React from "react";
import { Link } from "react-router-dom";

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  //consolidate following methods into one somehow

  redirectToChangePasswordForm(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push("/api/users/" + this.props.currentUser.id);

    //forward to change password form
    //forward to chef signup
    //redirect to chef edit profil
    //redirect to chef edit menu items
    //redirect to user orders
    //redirect to admin tools
    //redirect to kitchen tools
  }

  render() {
    if (this.props.currentUser) {
      let dropDownMenuItems = [
        <li key="change-password">
          <div
            onClick={ this.redirectToChangePasswordForm.bind(this) }
            className="drop-down-menu-item"
            >Change Password
          </div>
        </li>,
        <li key="user-orders">
          <div
            onClick={ this.redirect }
            className="drop-down-menu-item"
            >User Orders
          </div>
        </li>
      ];

      if ((this.props.currentUser.username === "test@test.com") ||
          (this.props.currentUser.kitchen && this.props.currentUser.chef)
      ) { // for testing
        dropDownMenuItems.push(
          <li key="chef-tools">
            <div
              onClick={ this.redirect }
              className="drop-down-menu-item"
              >Chef Tools
            </div>
          </li>,
          <li key="kitchen-tools">
            <div
              onClick={ this.redirect }
              className="drop-down-menu-item"
              >Kitchen Tools
            </div>
          </li>
        );
      } else if (this.props.currentUser.kitchen) {
        dropDownMenuItems.push(
          <li key="kitchen-tools">
            <div
              onClick={ this.redirect }
              className="drop-down-menu-item"
              >Kitchen Tools
            </div>
          </li>
        );
      } else if (this.props.currentUser.chef) {
        dropDownMenuItems.push(
          <li key="chef-tools">
            <div
              onClick={ this.redirect }
              className="drop-down-menu-item"
              >Chef Tools
          </div>
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
