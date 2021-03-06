import React from "react";
import { Link } from "react-router-dom";

import KitchenMapContainer from "./kitchen_map/kitchen_map_container.jsx";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  parseLatLng() {
    if (this.props.history.location.search) {
      let query = this.props.history.location.search;
      let lat = [];
      let lng = [];
      let queryNum = -1;
      let acceptableChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"];

      for (let i = 0; i < query.length; i++) {
        if (query[i] === "=") {
          queryNum++;
        }

        if (queryNum === 0 && acceptableChars.includes(query[i])) {
          lat.push(query[i]);
        } else if (queryNum === 1 && acceptableChars.includes(query[i])) {
          lng.push(query[i]);
        }
      }

      return [parseFloat(lat.join("")), parseFloat(lng.join(""))];
    }
  }

  render() {
    let lat;
    let lng;
    let latLng = this.parseLatLng();

    if (latLng) {
      lat = latLng[0];
      lng = latLng[1];
    }

    return (
      <div className="search-page">
        <KitchenMapContainer
          lat={ lat }
          lng={ lng }
          history={ this.props.history }
        />
      </div>
    );
  }
}

export default SearchPage;
