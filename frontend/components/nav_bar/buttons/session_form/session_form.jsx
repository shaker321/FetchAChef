import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
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
    this.props.processForm(user);
  }


  renderErrors() {
    return (
      <ul>
        { this.props.errors.map(
          (error, i) => (
            <li key={`error-${i}`}> { error } </li>
          )
        )}
      </ul>
    );
  }

  toggleMessage() {
    let navLink;
    let text;

    if (this.props.type === "login") {
      text = (
        <h6 className="login-form-text">Don't have an account?</h6>
      );

      navLink = (
        <Link to="/signup" className="login-form-navLink">Sign up!</Link>
      );
    } else {
      text = (
        <h6 className="login-form-text">Already have an account?</h6>
      );

      navLink = (
        <Link to="/signup" className="login-form-navLink">Log In!</Link>
      );
    }

    return ( [text, navLink] );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) } >
        { this.renderErrors() }
        <div>
          <input
            type="text"
            value={ this.state.username }
            placeholder="Username"
            onChange = { this.update("username") }
          />

          <input
            type="password"
            value={ this.state.password }
            placeholder="Password"
            onChange={ this.update("password") }
          />

          <input
            type="submit"
            value={ this.props.formType }
          />

          { this.toggleMessage() }
        </div>
      </form>
    );
  }
}

export default SessionForm;
