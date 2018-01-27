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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return (
      e => this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);

    this.props.processForm({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });
  }


  renderErrors() {
    return (
      <ul>
        { this.props.errors.map(
          (error, i) => (
            <li className="login-form-errors" key={ `error-${i}` }> { error } </li>
          )
        )}
      </ul>
    );
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
            { this.renderErrors() ? this.renderErrors() : this.props.close() }
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
            </div>

            { this.toggleForm() }
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
