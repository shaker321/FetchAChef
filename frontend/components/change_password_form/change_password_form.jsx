import React from "react";

class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: ""
    };
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.changePassword(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="change-password-form-container">
        <form onSubmit={ this.handleSubmit } className="change-password-form">
          <h3 className="change-password-form-title">Change Password</h3>
          <input
            type="password"
            value={ this.state.currentPassword }
            placeholder= "Current Password"
            onChange={ this.update("oldPassword") }
            className="change-password-form-input"
          />

          <input
            type="password"
            value={ this.state.newPassword }
            placeholder= "New Password"
            onChange={ this.update("newPassword") }
            className="change-password-form-input"
          />

          <input
            type="password"
            value={ this.state.newPasswordConfim }
            placeholder= "Confirm New Password"
            onChange={ this.update("newPasswordConfirm") }
            className="change-password-form-input"
          />

          <input
            type="submit"
            className="change-password-form-submit"
            value="Change Password"
          />
        </form>
        <div className="change-password-form-image"></div>
      </div>
    );
  }
}

export default ChangePasswordForm;
