import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  buttons() {
    let buttons = [
      <li key="order-button"><Link to="/api/kitchens" className="main-page-links">Order Food</Link></li>
    ];

    if (this.props.loggedIn) {
      buttons.push(
        <li key="chef-button"><Link to="/api/chefs/post" className="main-page-links">I'm a Chef</Link></li>,
        <li key="kitchen-button"><Link to="/api/kitchens/post" className="main-page-links">Open a Kitchen</Link></li>
      );
    }

    return buttons;
  }

  render() {
    return (
      <div className="main-page">
        <div className="main-page-image">
          <h1 className="main-page-title">FetchAChef</h1>
          <h3 className="main-page-description">Homecooking by neighbors for your family.</h3>

          <ul>
            { this.buttons() }
          </ul>
        </div>
      </div>
    );
  }
}


export default MainPage;
