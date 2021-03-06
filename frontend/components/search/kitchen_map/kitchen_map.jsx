import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import KitchenIndexContainer from "./kitchen_index/kitchen_index_container.jsx";

class KitchenMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.markers = [];
    this.markerActive = undefined;

    this.setCenterCoords();
  }

  setCenterCoords() {
    let lat = 40.7529;
    let lng = -73.9942;

    if (this.props.lat && this.props.lng) {
      lat = this.props.lat;
      lng = this.props.lng;
    }

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(mapDOMNode, {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 13
    });

    if (navigator.geolocation && !this.props.lat) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.map.setCenter(pos);
        }
      );
    }

    this.mapsListener = google.maps.event.addListener(
      this.map,
      "idle",
      this.getMapCoords.bind(this)
    );
  }

  componentWillUnmount() {
    google.maps.event.removeListener(this.mapsListener);
  }

  getMapCoords() {
    let latLngBounds = this.map.getBounds();
    let northEastBound = latLngBounds.getNorthEast();
    let southWestBound = latLngBounds.getSouthWest();

    this.bounds = {
      bounds: {
        "northEast": {
          lat: (northEastBound.lat()).toString(),
          lng: (northEastBound.lng()).toString()
        },
        "southWest": {
          lat: (southWestBound.lat()).toString(),
          lng: (southWestBound.lng()).toString()
        }
      }
    };

    this.props.fetchAllKitchens(this.bounds).then(this.createMarkers.bind(this));
  }

  createMarkers() {
    let that = this;
    let remainingMarkers = [];
    let kitchens = {};

    for (let i = 0; i < this.props.kitchens.length; i++) {
      if (this.props.kitchens[i].approved) {
        kitchens[this.props.kitchens[i].id] = this.props.kitchens[i];
      }
    }

    this.markers.forEach(
      (marker, index) => {
        if (kitchens[marker.id]) {
          kitchens[marker.id] = null;
          remainingMarkers.push(marker);
        } else {
          marker.setMap(null);
        }
      }
    );

    this.markers = remainingMarkers;

    Object.keys(kitchens).forEach(
      (key) => {
        if (kitchens[key] !== null) {
          let marker = new google.maps.Marker({
            position: {
              lat: kitchens[key].lat,
              lng: kitchens[key].lng
            },
            map: that.map,
            title: kitchens[key].name,
            id: kitchens[key].id
          });

          that.markers.push(marker);

          marker.addListener("mouseover", () => {
            if (that.markerActive) {
              that.infowindow.close();
              that.markerActive = false;
            }

            that.infowindow = new google.maps.InfoWindow({
              content:
                `<a href="#/api/kitchens/${kitchens[marker.id].id}">
                  <h3 class="info-window-text">${kitchens[marker.id].kitchen_name}</h3>
                  <img class="info-window-image" src="${kitchens[marker.id].image}">
                </a>`
            });

            that.markerActive = true;

            that.infowindow.open(that.map, marker);
          });

          that.map.addListener("click", () => {
            that.infowindow.close();
            that.markerActive = false;
          });
        }
      }
    );
  }

  render() {
    return (
      <div>
        <KitchenIndexContainer
          history={ this.props.history }
        />
        <div className="map" ref="map"></div>
      </div>
    );
  }
}

export default KitchenMap;
