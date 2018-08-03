import React, { Component } from "react";
import "./App.css";
import EditForm from "./components/EditForm";
import AboutMe from "./components/AboutMe";
//React doesn't know about the AboutMe component yet. Tell it where to find it!

class App extends Component {
  state = {
    name: "",
    surname: "",
    technology: "",
    approved: false
  };

  changeName = name => {
    this.setState({ name });
  };

  changeSurname = surname => {
    //Follow the method above. It's completely the same.
  };
  changeTechnology = technology => {
    //Again pls.
  };
  toggleApproved = approved => {
    this.setState({ approved: !this.state.approved });
  };

  render() {
    // Deconstruct state here (const {smth} = this.state;)
    return (
      <div>
        {/* We want to have profile changer to the left 
        and the info to the right. 
        Render all this here!

        Like this <AboutMe name={name} />
        Don't forget to pass handlers where they are needed.
         */}
      </div>
    );
  }
}
export default App;
