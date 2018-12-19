import React, { Component } from "react";

class Contact extends Component {
  // set everything to false because I don't want it to display until user has hovered
  state = {
    showPhoneNumber: false,
    showEmail: false,
    showSnailMail: false
  };

  // set everything to true when mouse enters
  handlePhoneMouseEnter = () => {
    this.setState({
      showPhoneNumber: true
    });
  };

  handleEmailMouseEnter = () => {
    this.setState({
      showEmail: true
    });
  };

  handleSnailMailMouseEnter = () => {
    this.setState({
      showSnailMail: true
    });
  };

  // set everything back to false when mouse leaves
  handlePhoneMouseLeave = () => {
    this.setState({
      showPhoneNumber: false
    });
  };

  handleEmailMouseLeave = () => {
    this.setState({
      showEmail: false
    });
  };

  handleSnailMailMouseLeave = () => {
    this.setState({
      showSnailMail: false
    });
  };

  render() {
    // variables that will show or hide depending on user event
    const phoneNumber = <p class="info">972.948.0392</p>;
    const email = <p class="info">abby.gottlich@gmail.com</p>;
    const snailMail = (
      <p class="info">5709 Knoll Pines Pass, Austin, TX 78724</p>
    );
    return (
      // onMouseEnter, display the info; onMouseLeave, hide the info
      <div>
        <p class="contact-title">Let's Chat!</p>
        <p
          onMouseEnter={this.handlePhoneMouseEnter}
          onMouseLeave={this.handlePhoneMouseLeave}
        >
          <p class="info-title">Phone Number</p>
        </p>
        {this.state.showPhoneNumber && phoneNumber}
        <p
          onMouseEnter={this.handleEmailMouseEnter}
          onMouseLeave={this.handleEmailMouseLeave}
        >
          <p class="info-title">Email</p>
        </p>
        {this.state.showEmail && email}
        <p
          onMouseEnter={this.handleSnailMailMouseEnter}
          onMouseLeave={this.handleSnailMailMouseLeave}
        >
          <p class="info-title">Snail Mail</p>
        </p>
        {this.state.showSnailMail && snailMail}
      </div>
    );
  }
}

export default Contact;
