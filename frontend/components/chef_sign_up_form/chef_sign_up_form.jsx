import React from "react";

class ChefSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      username: this.props.currentUser.username,
      general_cuisine: "",
      specific_cuisine: "",
      kitchen_id: "",
      user_id: this.props.currentUser.id
    };
  }

  componentDidMount() {
    this.props.fetchAllKitchens({
      bounds: {
        "northEast": {
          lat: "90",
          lng: "180"
        },
        "southWest": {
          lat: "-90",
          lng: "-180"
        }
      }
    }).then(this.createKitchenOptions);
  }

  createKitchenOptions() {
    let kitchens = this.props.kitchens;
    this.kitchenOptions = [];

    Object.keys(kitchens).forEach((key) => {
      this.kitchenOptions.push(
        <option value={ kitchens[key].id }>{ kitchens[key].kitchen_name }</option>
      );
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.creatChef({
      chef: this.state
    });

    this.props.history.push("/");
  }

  update(property) {
    return (e) => this.setState({ property: e.target.value }); // [property]?
  }

  render() {
    return (
      <div className="chef-form-container">
        <form onSubmit={ this.handleSubmit } className="chef-form-text">
          <h3 className="chef-form-title">Become a Chef!</h3>
          <input
            type="text"
            value={ this.state.first_name }
            onChange={ this.update("first_name") }
            className="chef-form-input"
            placeholder="First Name"
          />

          <br/>

          <input
            type="text"
            value={ this.state.last_name }
            onChange={ this.update("last_name") }
            className="chef-form-input"
            placeholder="Last Name"
          />

          <br/>

          <select onChange={ this.update("general_cuisine") } className="chef-form-input">
            <option value="" disable="disabled" selected="selected">General Cuisine</option>
            <option value="African">African</option>
            <option value="Asian">Asian</option>
            <option value="Caribbean">Caribbean</option>
            <option value="European">European</option>
            <option value="Indian">Indian</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="North American">North American</option>
            <option value="South American">South American</option>
          </select>

          <br/>

          <input
            type="text"
            value={ this.state.specific_cuisine }
            onChange={ this.update("specific_cuisine") }
            className="chef-form-input"
            placeholder="Specific Cuisine"
          />

          <br/>

          <select onChange={ this.update("kitchen_id") } className="chef-form-input">
            <option value="" disabled="disabled" selected="selected">Kitchen</option>
            { this.kitchenOptions }
          </select>

          <br/>

          <input
            type="submit"
            value="Submit for Approval"
            className="chef-form-submit"
            id="post"
          />
        </form>

        <div className="chef-form-image"/>
      </div>
    );
  }

}

export default ChefSignUpForm;
