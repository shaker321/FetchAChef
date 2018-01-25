import React from "react";
import { Link, withRouter } from "react-router-dom";

class BaseBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><a href="mailto:anthonypaul.shaker@gmail.com">Contact</a></li>
          <li><a href="https://github.com/shaker321/FetchAChef" target="_blank">Github</a></li>
          <li><a href="http://www.tonyshaker.com/" target="_blank">Personal Site</a></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(BaseBar);
