import React from "react";

class KitchenTools extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen_name: "",
      description: "",
      lat: "",
      lng: "",
      owner: "",
      user_id: this.props.currentUser.id,
      health_cert: "",
      health_cert_url: "",
      food_handler_cert: "",
      food_handler_cert_url: "",
      image_file: "",
      image_url: "",
      chefs: ""
    };
  }

  componentDidMount() {
    this.props.fetchSingleKitchen(this.props.currentUser.kitchen.id).then(this.setKitchen.bind(this));

    let input = document.getElementById("kitchen-tools-location-input");
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(
      this.autocomplete,
      "place_changed",
      this.updateAddress
    );
  }

  setKitchen() {
    this.kitchen = this.props.currentUser.kitchen;

    this.setState({
      kitchen_name: this.kitchen.kitchen_name,
      description: this.kitchen.description,
      lat: this.kitchen.lat,
      lng: this.kitchen.lng,
      owner: this.kitchen.owner,
      user_id: this.kitchen.user_id,
      image_file: this.kitchen.imageFile,
      image_url: "",
      health_cert: this.state.health_cert,
      health_cert_url: "",
      food_handler_cert: this.state.food_handler_cert,
      food_handler_cert_url: "",
    });
  }

  updateAddress() {
    this.address = this.autocomplete.getPlace();
  }

  updateChefs() {
    this.setState({
      chefs: this.kitchen.chefs
    });
  }

  componentWillUnmount() {
    this.autocompleteListener.remove();
  }

  handleSubmit(e) {
    e.preventDefault();

    const coords = {
      lat: this.address.geometry.location.lat(),
      lng: this.address.geometry.location.lng()
    };

    let formData = new FormData();
    formData.append("kitchen[kitchen_name]", this.state.kitchen_name);
    formData.append("kitchen[description]", this.state.description);
    formData.append("kitchen[lat]", coords.lat);
    formData.append("kitchen[lng]", coords.lng);
    formData.append("kitchen[owner]", this.state.owner);
    formData.append("kitchen[user_id]", this.state.user_id);
    formData.append("kitchen[health_cert]", this.state.health_cert);
    formData.append("kitchen[food_handler_cert]", this.state.food_handler_cert);

    if (this.state.imageFile !== this.props.imageFile) {
      formData.append("kitchen[image]", this.state.image_file);
    }

    this.props.updateKitchen(formData);
    // this.props.history.push("/");
  }

  updateKitchenImage(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = (() => {
      this.setState({image_file: file, image_url: fileReader.result});
    }).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateHealthCert(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = (() => {
      this.setState({health_cert: file, health_cert_url: fileReader.result});
    }).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  approveChef(e) {
    e.preventDefault();
    e.stopPropagation();

    let chef = this.state.chefs[e.target.id];

    chef.approved = true;

    this.props.approveChef({
      chef: chef
    });
  }

  denyChef(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.denyChef(e.target.id);
  }

  approvedAndPendingChefs() {
    const approvedChefs = [];
    const approvedChefIndexItems = [];
    const pendingChefs = [];
    const pendingChefIndexItems = [];

    Object.keys(this.state.chefs).forEach((chef_id) => {
      if (this.state.chefs[chef_id].approved === true) {
        approvedChefs.push(this.state.chefs[chef_id]);
      } else {
        pendingChefs.push(this.state.chefs[chef_id]);
      }
    });

    if (approvedChefs) {
      approvedChefs.forEach((chef) => {
        approvedChefIndexItems.push(
          <li className="kitchen-tools-index-item">
            <div>Name: { chef.first_name } { chef.last_name }</div>
            <div>Username: { chef.username }</div>
            <div>General Cuisine: { chef.general_cuisine }</div>
            <div>Specific Cuisine: { chef.specific_cuisine }</div>
          </li>
        );
      });
    }

    if (pendingChefs) {
      pendingChefs.forEach((chef) => {
        pendingChefIndexItems.push(
          <li className="kitchen-tools-index-item">
            <div>Name: { chef.first_name } { chef.last_name }</div>
            <div>Username: { chef.username }</div>
            <div>General Cuisine: { chef.general_cuisine }</div>
            <div>Specific Cuisine: { chef.specific_cuisine }</div>
            <input
              type="submit"
              value="Approve"
              className="kitchen-tools-index-item-approve-button"
              onClick={ this.approveChef.bind(this) }
              id={chef.id}
            />

            <br/>

            <input
              type="submit"
              value="Deny"
              className="kitchen-tools-index-item-deny-button"
              onClick={ this.denyChef.bind(this) }
              id={chef.id}
            />
          </li>
        );
      });
    }

    return [approvedChefIndexItems, pendingChefIndexItems];
  }

  render() {
    let chefs = this.approvedAndPendingChefs();
    let approvedChefs = chefs[0];
    let pendingChefs = chefs[1];

    return (
      <div className="kitchen-tools-container">
        <div className="kitchen-tools-image"></div>
        <div className="kitchen-tools-text">
          <form onSubmit={ this.handleSubmit.bind(this) }>
            <h3 className="kitchen-tools-title">Kitchen Tools</h3>
            <h3 className="kitchen-tools-subtitle">Edit Kitchen Profile</h3>

            <input
              type="text"
              value={ this.state.kitchen_name }
              onChange={ this.update("kitchen_name") }
              className="kitchen-tools-input"
              placeholder="Kitchen Name"/>

            <br/>

            <input
              type="text"
              value={ this.state.owner }
              onChange={ this.update("owner") }
              className="kitchen-tools-input"
              placeholder="Owner"/>

            <br/>

            <input
              type="text"
              className="kitchen-tools-input"
              id="kitchen-tools-location-input"
              placeholder="Kitchen Address"/>

            <br/>

            <textarea
              type="text"
              value={ this.state.description }
              onChange={ this.update("description") }
              className="kitchen-tools-input kitchen-tools-description-input"
              placeholder="About Us"/>

            <br/>

            <div className="kitchen-tools-img-container">
              <h5 className="kitchen-tools-body">Kitchen Image</h5>
              <input type="file" onChange={ this.updateKitchenImage.bind(this) } className="kitchen-tools-img"/>

              <br/>

              <img src={ this.state.image_url } className="kitchen-tools-img-show"/>
            </div>

            <br/>

            <div className="kitchen-tools-img-container">
              <h5 className="kitchen-tools-body">Health Certification</h5>
              <input type="file" onChange={ this.updateHealthCert } className="kitchen-tools-img"/>

              <br/>

              <img src={ this.state.health_cert_url } className="kitchen-tools-img-show"/>
            </div>

            <br/>

            <div className="kitchen-tools-img-container">
              <h5 className="kitchen-tools-body">Food Handler Certification</h5>
              <input type="file" onChange={ this.updateFoodHandlerCert } className="kitchen-tools-img"/>

              <br/>

              <img src={ this.state.food_handler_cert_url } className="kitchen-tools-img-show"/>
            </div>

            <br/>

            <input
              type="submit"
              value="Update Profile"
              className="kitchen-tools-submit"
              id="post"/>
          </form>

          <h1 className="kitchen-tools-title">Chefs</h1>
          <h1 className="kitchen-tools-subtitle">Approved Chefs</h1>
          <ul className="kitchen-tools-index">{ approvedChefs }</ul>
          <h1 className="kitchen-tools-subtitle">Pending Chefs</h1>
          <ul className="kitchen-tools-index">{ pendingChefs }</ul>
        </div>
      </div>
    );
  }
}

export default KitchenTools;
