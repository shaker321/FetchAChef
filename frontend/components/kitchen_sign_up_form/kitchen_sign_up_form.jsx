import React from "react";

class KitchenSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen_name: "",
      owner: this.props.currentUser.username,
      lat: undefined,
      lng: undefined,
      user_id: this.props.currentUser.id,
      healthCert: null,
      healthCertUrl: null,
      foodHandlerCert: null,
      foodHandlerCertUrl: null
    };
  }

  componentDidMount() {
    let input = document.getElementById("kitchen-form-location-input");
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(this.autocomplete, "place_changed", this.updateAddress.bind(this));
  }

  componentWillUnmount() {
    this.autocompleteListener.remove();
  }

  updateAddress() {
    this.address = this.autocomplete.getPlace();
  }

  handleSubmit(e) {
    e.preventDefault();

    const coords = {
      lat: this.address.geometry.location.lat(),
      lng: this.address.geometry.location.lng()
    };

    let formData = new FormData();
    formData.append("kitchen[kitchen_name]", this.state.kitchen_name);
    formData.append("kitchen[owner]", this.state.owner);
    formData.append("kitchen[lat]", coords.lat);
    formData.append("kitchen[lng]", coords.lng);
    formData.append("kitchen[user_id]", this.state.user_id);
    formData.append("kitchen[health_cert]", this.state.healthCert);
    formData.append("kitchen[food_handler_cert]", this.state.foodHandlerCert);

    this.props.createKitchen(formData);
    this.props.history.push("/");
  }

  updateHealthCert(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = (() => {
      this.setState({
        healthCert: file,
        healthCertUrl: fileReader.result
      });
    }).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateFoodHandlerCert(e) {
    e.preventDefault;

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = (() => {
      this.setState({
        foodHandlerCert: file,
        foodHandlerCertUrl: fileReader.result
      });
    }).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <div className="kitchen-form-container">
        <div className="kitchen-form-image"/>

        <form onSubmit={ this.handleSubmit.bind(this) } className="kitchen-form-text">
          <h3 className="kitchen-form-title">Open a Kitchen!</h3>
          <h5 className="kichen-form-body">Welcome to FetchAChef! To open a kitchen, you must provide the following: </h5>

          <br/>

          <input
            type="text"
            value={ this.state.kitchen_name }
            onChange={ this.update("kitchen_name") }
            className="kitchen-form-input"
            placeholder="Kitchen Name"
          />

          <br/>

          <input
            type="text"
            className="kitchen-form-input"
            id="kitchen-form-location-input"
            placeholder="Kitchen Address"
          />

          <br/>

          <div className="kitchen-form-img-container">
            <h5 className="kitchen-form-body">Health Certification</h5>
            <input type="file" onChange={ this.updateHealthCert.bind(this) } className="kitchen-form-img"/>

            <br/>

            <img src={ this.state.healthCertUrl } className="kitchen-form-img-show"/>
          </div>

          <br/>

          <div className="kitchen-form-img-container">
            <h5 className="kitchen-form-body">Food Handler Certification</h5>
            <input type="file" onChange={ this.updateFoodHandlerCert.bind(this) } className="kitchen-form-img"/>

            <br/>

            <img src={ this.state.foodHandlerCertUrl } className="kitchen-form-img-show"/>
          </div>

          <br/>

          <input
            type="submit"
            value="Submit for Approval"
            className="kitchen-form-submit"
            id="post"
          />
        </form>
      </div>
    );
  }
}

export default KitchenSignUpForm;
