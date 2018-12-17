import React, { Component } from "react";

class About extends Component {
  state = {
    showMoreInfo: false
  };

  handleClick = () => {
    this.setState({
      showMoreInfo: !this.state.showMoreInfo
    });
  };

  render() {
    const moreInfo = <p>fjergkjhegkjhwgwhgkjwehgkjwgkjwgkj</p>;

    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.showMoreInfo ? "Read less" : "Read more"}
        </button>
        <p class="title">Hi, my name is Abby.</p>
        {this.state.showMoreInfo && moreInfo}
      </div>
    );
  }
}

export default About;
