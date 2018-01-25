import React from "react";

class BaseBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-bar">
        <ul>
          <li><a href="mailto:anthonypaul.shaker@gmail.com">Contact</a></li>
          <li><a href="https://github.com/shaker321/FetchAChef" target="_blank">Github</a></li>
          <li><a href="http://www.tonyshaker.com/" target="_blank">Personal Site</a></li>
        </ul>
      </div>
    );
  }
}

export default BaseBar;
