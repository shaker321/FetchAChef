import React from "react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.setState({ currentUser: this.props.user.username });
    }
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
          <li><Link to="/">Welcome `${this.state.currentUser}`</Link></li>
        </ul>
      </div>
    );
  }

  render() {
    let buttons;

    this.state.currentUser ? (buttons = this.loggedInButtons()) : (buttons = this.loggedOutButtons());

    return (
      buttons
    );
  }
}

export default withRouter(NavBar);
