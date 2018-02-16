import React from "react";

import UserOrdersIndexItem from "./user_orders_index_item.jsx";

class UserOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: this.props.currentUser.orders,
      kitchens: ""
    };
  }

  componentWillMount() {
    this.props.fetchAllKitchens().then(this.setKitchens.bind(this));
  }

  setKitchens() {
    this.setState({
      kitchens: this.props.kitchens
    });
  }

  getKitchen(kitchenId) {
    let kitchen;

    for (let i = 0; i < this.state.kitchens.length; i++) {
      if (this.state.kitchens[i].id === kitchenId) {
        kitchen = this.state.kitchens[i];
      }
    }

    return kitchen;
  }

  orderIndex() {
    let orders = [];
    let that = this;

    if (this.state.orders && this.state.kitchens) {
      that.state.orders.forEach((order) => {
        orders.push(
          <div className="user-orders-index-item" key={ order.id }>
            <UserOrdersIndexItem
              orderNumber={ order.id }
              date={ order.created_at }
              kitchen={ that.getKitchen(order.kitchen_id) }
              menuItemId={ order.menu_item_id }
              price={ order.price }
            />
          </div>
        );
      });
    }

    return orders;
  }

  render() {
    return (
      <div className="user-orders-container">
        <div className="user-orders-image"></div>
        <div className="user-orders-text">
          <h1 className="user-orders-title">Order Summary</h1>
          <div className="user-orders-index">
            { this.orderIndex() }
          </div>
        </div>
      </div>
    );
  }
}

export default UserOrders;
