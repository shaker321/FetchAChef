import React from "react";
import ReactDOM from "react-dom";

import KitchenIndexItem from "./kitchen_index_item.jsx";

class KitchenIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  compileItems() {
    let kitchens = {};

    for (let i = 0; i < this.props.kitchens.length; i++) {
      if (this.props.kitchens[i].approved) {
        kitchens[this.props.kitchens[i].id] = this.props.kitchens[i];
      }
    }

    let kitchenKeys = Object.keys(kitchens);

    let indexItems = kitchenKeys.map(
      (key) => {
        if (kitchens[key].approved) {
          return (
            <KitchenIndexItem
              kitchen={ kitchens[key] }
              key={ key }
              history={ this.props.history }
              fetchSingleKitchen={ this.props.fetchSingleKitchen }
            />
          );
        }
      }
    );

    return indexItems;
  }

  render() {
    return (
      <div className="kitchen-index-items-container">
        { this.compileItems() }
      </div>
    );
  }
}

export default KitchenIndex;
