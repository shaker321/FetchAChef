import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import SessionFormContainer from "./session_form/session_form_container.jsx";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser,
      modalOpen: false
    };
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModalFromSignUp(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
    this.form = "signup";
  }

  openModalFromLogIn(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
    this.form = "login";
  }

  loggedOutButtons() {
    return (
      <div className="nav-bar">
        <ul>
          <li><Link to="/" className="nav-bar-link-to-home nav-bar-buttons">FetchAChef</Link></li>
          <li><button onClick={ this.openModalFromSignUp.bind(this) } className="nav-bar-signup nav-bar-buttons">Sign Up</button></li>
          <li><button onClick={ this.openModalFromLogIn.bind(this) } className="nav-bar-login nav-bar-buttons">Log In</button></li>
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
      <div>
        { buttons }

        <Modal
          className="modal"
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
        >
          <SessionFormContainer type={this.form}/>
        </Modal>
      </div>
    );
  }
}

export default NavBar;
