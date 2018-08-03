import React, { Component } from "react";

class AboutMe extends Component {
  toggleApproved = () => {
    //change parent state here
  };

  render() {
    //React doesn't see the technology prop, fix this.
    const { name, surname, technology, approved } = this.props;
    return (
      <div className={`about-me ${approved ? "approved" : ""}`}>
        <p>My name is: {name}!</p>
        <p>My last name is: {surname}!</p>
        <p>And I study {technology}!</p>

        <button onClick={this.toggleApproved}>
          {!approved ? "Approve Profile!" : "Approved!"}
        </button>
      </div>
    );
  }
}

export default AboutMe;
