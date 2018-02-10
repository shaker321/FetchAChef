import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import DropDownMenuContainer from "./drop_down_menu/drop_down_menu_container.jsx";
import SessionFormContainer from "./session_form/session_form_container.jsx";
import SearchLocationsBar from "./search_locations_bar/search_locations_bar.jsx";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser,
      modalOpen: false,
      dropDownOpen: false
    };
  }

  closeModal() {
    this.setState({
      username: this.props.currentUser,
      modalOpen: false
    });
  }

  openModalFromSignUp(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
    this.form = "signup";
    this.toggle = this.openModalFromLogIn.bind(this);
  }

  openModalFromLogIn(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
    this.form = "login";
    this.toggle = this.openModalFromSignUp.bind(this);
  }

  dropDownOn(e) {
    e.preventDefault();
    this.setState({ dropDownOpen: true });
  }

  dropDownOff(e) {
    e.preventDefault();
    this.setState({ dropDownOpen: false });
  }

  renderDropDownMenu() {
    return (this.state.dropDownOpen ? <DropDownMenuContainer/> : null);
  }

  loggedOutButtons() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <button
              onClick={ this.openModalFromSignUp.bind(this) }
              className="nav-bar-signup nav-bar-buttons">Sign Up</button></li>
          <li>
            <button
              onClick={ this.openModalFromLogIn.bind(this) }
              className="nav-bar-login nav-bar-buttons"
              >Log In
            </button>
          </li>
        </ul>
      </div>
    );
  }

  loggedInButtons() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <Link
              to="/"
              className="nav-bar-user nav-bar-buttons"
              onMouseOver={ this.dropDownOn.bind(this) }
              onMouseLeave={ this.dropDownOff.bind(this) }>Welcome!
              { this.renderDropDownMenu() }
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-bar-buttons nav-bar-cart">
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    let buttons;

    this.props.currentUser ? (buttons = this.loggedInButtons()) : (buttons = this.loggedOutButtons());

    return (
      <div>
        <Link
          to="/"
          className="nav-bar-link-to-home nav-bar-buttons"
          >FetchAChef
        </Link>

        <SearchLocationsBar
          history={ this.props.history }
        />

        { buttons }

        <Modal
          className="modal"
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal.bind(this) }
        >
          <SessionFormContainer
            type={this.form}
            toggle={this.toggle}
            close={this.closeModal.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}

export default NavBar;
