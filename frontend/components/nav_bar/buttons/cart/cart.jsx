import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: ""
    };
  }

  componentDidMount() {
    this.props.fetchCart(this.props.currentUser.cart.id).then(this.setCart.bind(this));
  }

  setCart() {
    this.cart = this.props.cart;

    this.setState({
      cart: this.cart
    });
  }

  removeItem(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.removeFromCart(e.target.id);
    // CartActions.fetchCart(SessionStore.currentUser().cart.id);
  }

  pendingOrders() {
    const orders = [];
    
    if (this.state.cart[this.props.currentUser.cart.id]) {
      this.state.cart[this.props.currentUser.cart.id].orders.forEach((order) => {
        orders.push(
          <li className="cart-index-item">
            <div>Item: { order.menu_item.title }</div>
            <div>Description: { order.menu_item.description }</div>
            <div>Quantity: { order.menu_item_id }</div>
            <div>Price: ${ order.price }</div>
            <input
              type="submit"
              value="Remove"
              className="cart-index-item-remove-button"
              onClick={ this.removeItem }
              id={ order.id }
            />
          </li>
        );
      });
    }

    return orders;
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-image"/>
        <div className="cart-text">
          <h1 className="cart-title">Cart</h1>
          <ul className="cart-index">{ this.pendingOrders() }</ul>
        </div>
      </div>
    );
  }
}

export default Cart;
