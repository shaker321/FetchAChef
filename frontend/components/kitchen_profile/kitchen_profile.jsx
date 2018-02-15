import React from "react";

import MenuIndexItemContainer from "./menu/menu_index_item_container.jsx";
import ReviewFormContainer from "./reviews/review_form_container.jsx";
import ReviewIndexItem from "./reviews/review_index_item.jsx";

class KitchenProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen: "",
      address: ""
    };

    this.props.fetchSingleKitchen(this.parseKitchenId()).then(this.createKitchenMap.bind(this));
  }

  parseKitchenId() {
    this.kitchenId;

    if (this.props.history.location.pathname) {
      let pathname = this.props.history.location.pathname;
      let acceptableChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      this.kitchenId = [];

      for (let i = 0; i < pathname.length; i++) {
        if (acceptableChars.includes(pathname[i])) {
          this.kitchenId.push(pathname[i]);
        }
      }

      return parseInt(this.kitchenId);
    }
  }

  createKitchenMap() {
    this.setState({
      kitchen: this.props.kitchens[this.kitchenId]
    });

    this.getAddress(this.state.kitchen.lat, this.state.kitchen.lng);
    this.createKitchenLocationMap();
  }

  getAddress(lat, lng) {
    let geocoder = new google.maps.Geocoder();
    let latLng = new google.maps.LatLng(lat, lng);
    let that = this;

    geocoder.geocode({ "latLng": latLng }, (results, status) => {
      that.setState({
        address: results[0].formatted_address
      });
    });

  }

  createKitchenLocationMap() {
    let kitchenCoords = {
      lat: this.state.kitchen.lat,
      lng: this.state.kitchen.lng
    };

    if (document.getElementById("map")) {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: kitchenCoords,
        zoom: 13
      });

      this.marker = new google.maps.Marker({
        map: this.map,
        position: kitchenCoords
      });
    }
  }

  addItemToCart(item, e) {
    e.preventDefault();
    e.stopPropagation();

    // CartActions.addToCart(SessionStore.currentUser().id, item)
  }

  menu() {
    const chefs = this.state.kitchen.chefs;
    let menu = [];

    if (chefs) {
      chefs.forEach((chef) => {
        if (chef.approved) {
          this.state.kitchen.menu_items.forEach((item) => {
            if (item.chef.id === chef.id) {
              menu.push(
                <ul className="menu-index-item">
                  <MenuIndexItemContainer
                    title={ item.title }
                    description={ item.description }
                    chefId={ item.chef_id }
                    price={ item.price }
                    key={ item.id }
                  />

                <input
                  type="submit"
                  value="Add to Cart"
                  onClick={ (e) => this.addItemToCart(item, e) }
                />
                </ul>
              );
            }
          });
        }
      });
    }
  }

  reviews() {
    const reviews = this.state.kitchen.reviews;
    this.reviewIndexItems = [];
    let numRatings = 0;
    let sumRatings = 0;

    if (reviews) {
      reviews.forEach((review) => {
        this.reviewIndexItems.push(
          <ReviewIndexItem
            rating={ review.rating }
            body={ review.body }
            username={ review.username }
            createdAt={ review.created_at }
          />
        );

        numRatings++;
        sumRatings += review.rating;
      });
    }

    // this.reviewIndexItems.reverse();

    this.avgRating = Math.round(sumRatings / numRatings );

    let ratings = [
      <div className="kitchen-profile-resp">☆</div>,
      <div className="kitchen-profile-resp">☆ ☆</div>,
      <div className="kitchen-profile-resp">☆ ☆ ☆</div>,
      <div className="kitchen-profile-resp">☆ ☆ ☆ ☆</div>,
      <div className="kitchen-profile-resp">☆ ☆ ☆ ☆ ☆</div>
    ];

    if (!this.avgRating) {
      this.avgRating = "N/A";
    } else {
      this.avgRating = ratings[this.avgRating - 1];
    }
  }

  render() {
    let mapId;

    if (this.state.kitchen) {
      mapId = "map";
    }

    return (
      <div className="kitchen-profile">
        <h1 className="kitchen-profile-name">{ this.state.kitchen.kitchen_name }</h1>

        <div className="kitchen-profile-upper-container">
          <div className="kitchen-profile-container">
            <div className="kitchen-profile-field">Average Rating: </div>
            <div className="kitchen-profile-resp">{ this.avgRating }</div>

            <br/>

            <h4 className="kitchen-profile-description">About Our Kitchen</h4>
            <h3 className="kitchen-profile-description">{ this.state.kitchen.description }</h3>
          </div>

          <div className="kitchen-profile-side-bar">
            <h4 className="kitchen-profile-location">Location</h4>
            <h3 className="kitchen-profile-location-resp">{ this.state.address }</h3>
            <div className="kitchen-profile-location-map" id={ mapId }></div>
          </div>

          <div className="menu-container">
            <h4 className="menu-header">What's Cooking Now?</h4>
            { this.menu() }
          </div>
        </div>

        <div className="reviews-container">
          <div className="kitchen-review-header">Reviews</div>
          <ReviewFormContainer kitchenId={ this.state.kitchen.id }/>
          { this.reviewIndexItems }
        </div>
      </div>
    );
  }

}

export default KitchenProfile;
