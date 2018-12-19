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
    const moreInfo = (
      <p class="more-info">
        I am strong Visual Designer aspiring to become a Designer-Developer
        <br />
        Hybrid. I am a graduate of General Assembly’s UX Design course and
        <br />
        currently learning front-end web development at Austin Coding Academy.
        <br />
        My growing knowledge of UX design and web development, in addition
        <br />
        to 2+ years of professional experience, have laid a good foundation for
        kicking
        <br />
        off my career. I am passionate, hardworking and always eager to learn.
      </p>
    );

    // when button is clicked, we attach the click function to the onClick event
    // showing/hiding button text
    // if user has clicked button and showMoreInfo is true, show moreInfo
    return (
      <div class="about">
        <p class="about-paragraph">
          Hi, my name is Abby.
          <br />I am a front-end web developer
          <br />
          with a knack for design.
        </p>
        {this.state.showMoreInfo && moreInfo}
        <div class="button" onClick={this.handleClick}>
          {this.state.showMoreInfo ? "Read less" : "Read more"}
        </div>
      </div>
    );
  }
}

export default About;

// comment added for PR purposes
