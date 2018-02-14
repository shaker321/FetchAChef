import React from "react";

class MenuIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chefName: ""
    };
  }

  componentDidMount() {
    this.props.fetchSingleChef(this.props.chefId).then(this.setState({
      chefName: `Chef ${this.props.chef.first_name} ${this.props.chef.last_name}`
    }));
  }

  render() {
    return (
      <ul>
        <li className="menu-index-item-title">{ this.props.title }</li>
        <li className="menu-index-item-description">{ this.props.description }</li>
        <li className="menu-index-item-title">
          <Link to={ "/api/chefs/" + this.props.chefId } className="link">{ this.state.chefName }</Link>
        </li>
        <li className="menu-index-item-title">${ this.props.price } Per Serving</li>
      </ul>
    );
  }

}

export default MenuIndexItem;
