import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class KitchenMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.markers = [];
    this.markerActive = undefined;

    this.createMarkers();
    this.setCenterCoords();
  }

  setCenterCoords() {
    let location = parseInt(this.props.locationId);
    this.map.setCenter({
      lat: location.center_lat,
      lng: location.center_lng
    });

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(mapDOMNode, {
      center: {
        lat: 40.7529,
        lng: -73.9942
      },
      zoom: 13
    });

    if (navigator.geolocation) {
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
      this._getMapCoords
    );
  }

  componentWillUnmount() {
    google.maps.event.removeListener(this.mapsListener);
  }

  getMapCoords() {
    let latLngBounds = this.map.getBounds();
    let northEastBound = latLngBounds.getNorthEast();
    let southWestBound = latLngBounds.getSouthWest();
    let bounds = {
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

    this.props.fetchAllKitchens(bounds);
  }

  createMarkers() {
    let kitchens = this.props.fetchAllKitchens();
    let that = this;
    let remainingMarkers = [];

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

          marker.addListener("click", () => {
            if (that.markerActive) {
              that.infowindow.close();
              that.markerActive = false;
            }

            that.infowindow = new google.maps.InfoWindow({
              content:
                `<a href="/api/kitchens/${kitchens[marker.id].id}">
                  <h3 class="info-window-text">${kitchens[marker.id].kitchen_name}</h3>
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
    if (this.props.lat) {
      this.map.setCenter({
        lat: this.props.lat,
        lng: this.props.lng
      });
    }

    return (
      <div className="map" ref="map">
      </div>
    );
  }
}

export default KitchenMap;
