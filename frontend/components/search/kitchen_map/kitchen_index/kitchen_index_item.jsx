import React from "react";
import ReactDom from "react-dom";

class KitchenIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    let path = this.props.history.location.pathname + "/" + this.props.kitchen.id.toString();
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <button
          className="kitchen-index-item"
          onClick={ this.handleClick.bind(this) }
        >
          <img src={ this.props.kitchen.image } className="kitchen-index-item-img"/>
          <div className="kitchen-index-item-text">{ this.props.kitchen.kitchen_name }</div>
        </button>
      </div>
    );
  }
}

export default KitchenIndexItem;
