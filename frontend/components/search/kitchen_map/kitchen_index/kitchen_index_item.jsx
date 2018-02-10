import React from "react";
import ReactDom from "react-dom";

class KitchenIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchSingleKitchen(this.props.kitchen.id);
    this.props.history.push("/api/kitchens/" + this.props.kitchen.id);
  }

  render() {
    return (
      <div>
        <button
          className="kitchen-index-item"
          onClick={ this.handleClick }
        >
          <div className="kitchen-index-item-text">
            { this.props.kitchen.kitchen_name }
          </div>
        </button>
      </div>
    );
  }
}

export default KitchenIndexItem;