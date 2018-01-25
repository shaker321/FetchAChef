import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser
    };
  }

  loggedOutButtons() {
    return (
      <div className="nav-bar">
        <ul>
          <li><Link to="/" className="nav-bar-link-to-home nav-bar-buttons">FetchAChef</Link></li>
          <li><Link to="/signup" className="nav-bar-signup nav-bar-buttons">Sign Up</Link></li>
          <li><Link to="/login" className="nav-bar-login nav-bar-buttons">Log In</Link></li>
        </ul>
      </div>
    );
  }

  loggedInButtons() {
    return (
      <div className="nav-bar">
        <ul>
          <li><Link to="/" className="nav-bar-link-to-home nav-bar-buttons">FetchAChef</Link></li>
          <li><Link to="/" className="nav-bar-buttons nav-bar-cart">Cart</Link></li>
          <li><Link to="/" className="nav-bar-user nav-bar-buttons">Welcome!</Link></li>
          <li><Link to={ this.props.logout() }>Logout</Link></li> //Move to dropdown
        </ul>
      </div>
    );
  }

  render() {
    let buttons;

    this.state.username ? (buttons = this.loggedInButtons()) : (buttons = this.loggedOutButtons());

    return (
      buttons
    );
  }
}

export default NavBar;
