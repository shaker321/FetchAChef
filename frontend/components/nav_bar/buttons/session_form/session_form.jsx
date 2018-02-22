import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    const user = Object.assign({}, this.state);

    this.props.processForm({
      username: this.state.username,
      password: this.state.password
    }).then(this.closeModal.bind(this));
  }

  demoLogIn(e) {
    e.preventDefault();

    this.props.login({
      username: "ChefRatatouille",
      password: "DemoChef"
    }).then(this.closeModal.bind(this));
  }

  closeModal() {
    if (!this.props.errors) {
      this.props.close();
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          { this.props.errors.map((error, i) => (
              <li className="login-form-errors" key={ `error-${i}` }> { error } </li>
          ))}
        </ul>
      );
    }
  }

  toggleForm() {
    let navLink;
    let text;

    if (this.props.type === "login") {
      text = (
        <h6 className="login-form-text" key="text">Don't have an account?</h6>
      );

      navLink = (
        <button
          onClick={ this.props.toggle }
          className="login-form-navLink"
          key="navLink">Sign up!
        </button>
      );
    } else if (this.props.type === "signup") {
      text = (
        <h6 className="login-form-text" key="text">Already have an account?</h6>
      );

      navLink = (
        <button
          onClick={ this.props.toggle }
          className="login-form-navLink"
          key="navLink">Log In!
        </button>
      );
    }

    return ( [text, navLink] );
  }

  submitButtonName() {
    return (this.props.type === "login" ? "Log In" : "Sign Up");
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-box">
          <form onSubmit={ this.handleSubmit.bind(this) }>
            { this.renderErrors() }

            <div>
              <input
                type="text"
                value={ this.state.username }
                placeholder="Username"
                onChange = { this.update("username") }
                className="login-input"
              />

              <input
                type="password"
                value={ this.state.password }
                placeholder="Password"
                onChange={ this.update("password") }
                className="login-input"
              />

              <input
                type="submit"
                value={ this.submitButtonName() }
                className="login-form-submit"
              />

              <input
                type="submit"
                className="login-form-submit"
                value="Demo Log In"
                onClick={ this.demoLogIn.bind(this) }
              />
            </div>
          </form>

          { this.toggleForm() }
        </div>
      </div>
    );
  }
}

export default SessionForm;
