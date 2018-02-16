import React from "react";

class ChefProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chef: {}
    };
  }

  componentWillMount() {
    this.props.fetchSingleChef(this.parseChefId()).then(this.setChef.bind(this));
  }

  parseChefId() {
    this.chefId = [];

    if (this.props.history.location.pathname) {
      let pathname = this.props.history.location.pathname;
      let acceptableChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (let i = 0; i < pathname.length; i++) {
        if (acceptableChars.includes(pathname[i])) {
          this.chefId.push(pathname[i]);
        }
      }

      this.chefId = parseInt(this.chefId.join(""));

      return this.chefId;
    }
  }

  setChef() {
    this.setState({
      chef: this.props.chefs[this.chefId]
    });
  }

  render() {
    return (
      <div className="chef-profile-container">
        <div className="chef-profile-image"></div>
        <div className="chef-profile-text">
          <h1 className="chef-profile-title"> Chef { this.state.chef.first_name } { this.state.chef.last_name }</h1>

          <br/>

          <div className="chef-profile-field"> General Cuisine: </div>
          <div className="chef-profile-resp">{ this.state.chef.general_cuisine }</div>

          <br/>

          <div className="chef-profile-field"> Specialty Cuisine: </div>
          <div className="chef-profile-resp">{ this.state.chef.specific_cuisine }</div>

          <br/>

          <div className="chef-profile-field"> About Me: </div>

          <br/>

          <p className="chef-profile-resp chef-profile-description">{ this.state.chef.description }</p>
        </div>
      </div>
    );
  }
}

export default ChefProfile;
