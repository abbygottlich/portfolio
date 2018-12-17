import React, { Component } from "react";

class About extends Component {
  // chose false because I don't want it to show up until event happens
  state = {
    showMoreInfo: false
  };

  // user event; when user clicks button, it shows or hides more info
  // if showMoreInfo is false, make it true; else, make it false
  handleClick = () => {
    this.setState({
      showMoreInfo: !this.state.showMoreInfo
    });
  };

  render() {
    // created this variable to show or hide depending on the state
    const moreInfo = <p>fjergkjhegkjhwgwhgkjwehgkjwgkjwgkj</p>;

    // when button is clicked, we attach the click function to the onClick event
    // showing/hiding button text
    // if user has clicked button and showMoreInfo is true, display moreInfo
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
