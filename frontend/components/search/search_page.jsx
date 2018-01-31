import React from "react";
import { Link } from "react-router-dom";

import KitchenMap from "somewhere";
import KitchenIndex from "somewhere";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-page">
        <KitchenMap
          lat={ parseFloat(this.props.location.query.lat) }
          lng={ parseFloat(this.props.location.query.lat) }
          locationId={ this.props.params.location_id }
        />

        <KitchenIndex
          locationId={ this.props.params.location_id }
        />
      </div>
    );
  }
}

export default SearchPage;
