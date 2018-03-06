import React from "react";

import MenuIndexItemContainer from "./menu/menu_index_item_container.jsx";
import ReviewFormContainer from "./reviews/review_form_container.jsx";
import ReviewIndexItem from "./reviews/review_index_item.jsx";

class KitchenProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen: {},
      address: "",
    };
  }

  componentWillMount() {
    this.props.fetchSingleKitchen(this.parseKitchenId()).then(this.createKitchenMap.bind(this));
  }

  parseKitchenId() {
    this.kitchenId = [];

    if (this.props.history.location.pathname) {
      let pathname = this.props.history.location.pathname;
      let acceptableChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (let i = 0; i < pathname.length; i++) {
        if (acceptableChars.includes(pathname[i])) {
          this.kitchenId.push(pathname[i]);
        }
      }

      this.kitchenId = parseInt(this.kitchenId.join(""));

      return this.kitchenId;
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

    this.props.addToCart(this.props.currentUser.id, item, this.state.kitchen);
  }

  menu() {
    const chefs = this.state.kitchen.chefs;
    let that = this;
    let menu = [];

    if (chefs) {
      chefs.forEach((chef) => {
        if (chef.approved) {
          this.state.kitchen.menu_items.forEach((item) => {
            if (item.chef_id === chef.id) {
              menu.push(
                <ul className="menu-index-item">
                  <MenuIndexItemContainer
                    title={ item.title }
                    description={ item.description }
                    chef={ chef }
                    price={ item.price }
                    key={ item.id }
                  />

                  <input
                    className="menu-index-item-add-to-cart"
                    type="submit"
                    value="Add to Cart"
                    onClick={ (e) => that.addItemToCart(item, e) }
                  />
                </ul>
              );
            }
          });
        }
      });
    }

    return menu;
  }

  reviews() {
    const reviews = this.state.kitchen.reviews;
    this.reviewIndexItems = [];
    let numRatings = 0;
    let sumRatings = 0;

    if (reviews) {
      let reviewsOrdered = reviews.sort((review1, review2) => {
        return review2.id - review1.id;
      });

      reviewsOrdered.forEach((review) => {
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
    this.reviews();

    return (
      <div className="kitchen-profile">
        <div className="kitchen-profile-upper-left">
          <h1 className="kitchen-profile-name">{ this.state.kitchen.kitchen_name }</h1>
          <div className="kitchen-profile-resp">{ this.avgRating }</div>
          <h3 className="kitchen-profile-description">{ this.state.kitchen.description }</h3>
        </div>

        <div className="kitchen-profile-upper-right">
          <div className="kitchen-profile-location-map" id="map"></div>
          <h3 className="kitchen-profile-location-resp">{ this.state.address }</h3>
        </div>

        <div className="kitchen-profile-lower-left">
          <h4 className="menu-header">What's Cooking Now?</h4>
          { this.menu() }
        </div>

        <div className="kitchen-profile-lower-right">
          <div className="kitchen-review-header">Reviews</div>
          <ReviewFormContainer kitchenId={ this.state.kitchen.id } addReview={ this.componentWillMount.bind(this) } />
          { this.reviewIndexItems }
        </div>
      </div>
    );
  }

}

export default KitchenProfile;
