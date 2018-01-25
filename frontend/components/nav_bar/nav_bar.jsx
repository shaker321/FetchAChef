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
      <div>
        <ul>
          <li><Link to="/">FetchAChef</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </div>
    );
  }

  loggedInButtons() {
    return (
      <div>
        <ul>
          <li><Link to="/">FetchAChef</Link></li>
          <li><Link to="/">Cart</Link></li>
          <li><Link to="/">Welcome!</Link></li>
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
