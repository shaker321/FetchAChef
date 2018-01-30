import React from "react";
import { Link } from "react-router-dom";

class SearchLocationsBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Search By Location"
    };
  }

  componentDidMount() {
    let input = document.getElementById("search-locations-bar");

    input.value = "";

    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(
      this.autocomplete,
      "place_changed",
      this.handleSubmit
    );
  }

  componentWillUnmount() {
    this.autocompleteListener.remove();
    this.componentDidMount();
  }

  handleSubmit(e) {
    const address = this.autocomplete.getPlace();

    const coords = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng()
    };

    // hashHistory.push({
    //   pathname: "/api/chefs",
    //   query: coords
    // });

    this.componentWillUnmount();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="search-locations-bar"
          className="search-locations-bar"
          placeholder={ this.state.text }
        />
      </div>
    );
  }

}

export default SearchLocationsBar;
