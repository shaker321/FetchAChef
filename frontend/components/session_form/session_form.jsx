import React from "react";
import { Link, withRouter } from "react-router-dom";

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

  navLink() {
    if (this.props.formType === "login") {
      return ( <Link to="/signup">sign up instead</Link> );
    } else {
      return ( <Link to="/login">log in instead</Link> );
    }
  }

  renderErrors() {
    return (
      <ul>
        { this.props.errors.map(
          (error, i) => (
            <li key={`error-${i}`}>
              { error }
            </li>
          )
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={ this.handleSubmit.bind(this) }
        >
          Welcome to FetchAChef

          <br/>

          Please { this.props.formType } or { this.navLink() }

          { this.renderErrors() }

          <div>
            <br/>

            <input
              type="text"
              value={ this.state.username }
              placeholder="Username"
              onChange = { this.update("username") }
            />

            <br/>

            <input
              type="password"
              value={ this.state.password }
              placeholder="Password"
              onChange={ this.update("password") }
            />

          <br/>

          <input
            type="submit"
            value={ this.props.formType }
          />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
