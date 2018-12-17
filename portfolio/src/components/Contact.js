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
    const phoneNumber = <p>34573952379</p>;
    const email = <p>fkjahflkajh</p>;
    const snailMail = <p>zdjhkfjh</p>;
    return (
      // onMouseEnter, display the info; onMouseLeave, hide the info
      <div>
        <p class="title">Contact</p>
        <p
          onMouseEnter={this.handlePhoneMouseEnter}
          onMouseLeave={this.handlePhoneMouseLeave}
        >
          Phone Number
        </p>
        {this.state.showPhoneNumber && phoneNumber}
        <p
          onMouseEnter={this.handleEmailMouseEnter}
          onMouseLeave={this.handleEmailMouseLeave}
        >
          Email
        </p>
        {this.state.showEmail && email}
        <p
          onMouseEnter={this.handleSnailMailMouseEnter}
          onMouseLeave={this.handleSnailMailMouseLeave}
        >
          Snail Mail
        </p>
        {this.state.showSnailMail && snailMail}
      </div>
    );
  }
}

export default Contact;
