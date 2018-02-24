import React from "react";

class ChefEditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      username: this.props.currentUser.username,
      general_cuisine: "",
      specific_cuisine: "",
      kitchen_id: "",
      description: "",
      userId: this.props.currentUser.id,
      chefId: this.props.currentUser.chef.id,
      imageFile: "",
      imageUrl: "",
      kitchens: []
    };
  }

  componentDidMount() {
    this.props.fetchAllKitchens({
      bounds: {
        "northEast": {
          lat: "90", lng: "180"
        },
        "southWest": {
          lat: "-90", lng: "-180"
        }
      }
    }).then(this.createKitchenOptions.bind(this));

    this.props.fetchSingleChef(this.props.currentUser.chef.id).then(this.setChef.bind(this));
  }

  setChef() {
    this.chef = this.props.chefs[this.props.currentUser.chef.id];

    this.setState({
      first_name: this.chef.first_name,
      last_name: this.chef.last_name,
      general_cuisine: this.chef.general_cuisine,
      specific_cuisine: this.chef.specific_cuisine,
      description: this.chef.description,
      kitchen_id: this.chef.kitchen_id,
      imageFile: this.chef.imageFile,
      imageUrl: ""
    });
  }

  createKitchenOptions() {
    this.kitchenOptions = [];
    let approvedKitchens = [];
    let that = this;

    this.props.kitchens.forEach((kitchen) => {
      if (kitchen.approved) {
        approvedKitchens.push(kitchen);
      }
    });

    Object.keys(approvedKitchens).forEach((key) => {
      if (approvedKitchens[key].id === that.chef.kitchen_id) {
        this.kitchenOptions.push(
          <option
            key={ approvedKitchens[key].id }
            value={ approvedKitchens[key].id }
            selected="selected"
          >
            { approvedKitchens[key].kitchen_name }
          </option>
        );
      } else {
        this.kitchenOptions.push(
          <option
            key={ approvedKitchens[key].id }
            value={ approvedKitchens[key].id }
            >
            { approvedKitchens[key].kitchen_name }
          </option>
        );
      }
    });

    this.setState({ kitchens: this.kitchenOptions });
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("chef[first_name]", this.state.first_name);
    formData.append("chef[last_name]", this.state.last_name);
    formData.append("chef[username]", this.state.username);
    formData.append("chef[general_cuisine]", this.state.general_cuisine);
    formData.append("chef[specific_cuisine]", this.state.specific_cuisine);
    formData.append("chef[description]", this.state.description);
    formData.append("chef[kitchen_id]", this.state.kitchen_id);
    formData.append("chef[user_id]", this.state.userId);
    formData.append("chef[id]", this.state.chefId);

    if (this.state.imageFile !== this.props.imageFile) {
      formData.append("chef[image]", this.state.imageFile);
    }

    this.props.updateChef(formData);
    this.props.history.push("/");
  }

  updateFile(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = (() => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  generateOptions() {
    let options = [(<option value={ this.state.general_cuisine }>{ this.state.general_cuisine }</option>)];
    let potentialOptions = [
      <option value="African">African</option>,
      <option value="Asian">Asian</option>,
      <option value="Caribbean">Caribbean</option>,
      <option value="European">European</option>,
      <option value="Indian">Indian</option>,
      <option value="Mediterranean">Mediterranean</option>,
      <option value="Middle Eastern">Middle Eastern</option>,
      <option value="North American">North American</option>,
      <option value="South American">South American</option>
    ];

    potentialOptions.forEach((option) => {
      if (option.props.value !== this.state.general_cuisine) {
        options.push(option);
      }
    });

    return options;
  }

  render() {
    return (
      <div className="chef-edit-profile-form-container">
        <form onSubmit={ this.handleSubmit.bind(this) } className="chef-edit-profile-form-text">
          <h3 className="chef-edit-profile-form-title">Update Chef Profile</h3>
          <input
            type="text"
            value={ this.state.first_name }
            onChange={ this.update("first_name").bind(this) }
            className="chef-edit-profile-form-input"
            placeholder="First Name"/>

          <br/>

          <input
            type="text"
            value={ this.state.last_name }
            onChange={ this.update("last_name").bind(this) }
            className="chef-edit-profile-form-input"
            placeholder="Last Name"/>

          <br/>

          <select onChange={ this.update("general_cuisine").bind(this) } className="chef-edit-profile-form-input">
            { this.generateOptions() }
          </select>

          <br/>

          <input
            type="text"
            value={ this.state.specific_cuisine }
            onChange={ this.update("specific_cuisine").bind(this) }
            className="chef-edit-profile-form-input"
            placeholder="Specific Cuisine"/>

          <br/>

          <select onChange={ this.update("kitchen_id").bind(this) } className="chef-edit-profile-form-input">
            { this.state.kitchens }
          </select>

          <br/>

          <textarea
            type="text"
            value={ this.state.description }
            onChange={ this.update("description").bind(this) }
            className="chef-edit-profile-form-input chef-edit-profile-description-form-input"
            placeholder="About Me"/>

          <br/>

          <div className="chef-edit-profile-form-img-container">
            <input type="file" onChange={ this.updateFile.bind(this) } className="chef-edit-profile-form-img"/>
            <img src={ this.state.imageUrl } className="chef-edit-profile-form-img-show"/>
          </div>

          <br/>

          <input
            type="submit"
            value="Update Profile"
            className="chef-edit-profile-form-submit"
            id="post"/>
        </form>
      </div>
    );
  }
}

export default ChefEditProfile;
