import React, { Component } from "react";

//You can do exports like this if you want to
export default class EditForm extends Component {
  changeName = e => {
    //Call the function from props. You can get the value from event with e.target.value
  };

  changeSurname = e => {
    //Same here
  };

  changeTechnology = e => {
    //And here
  };

  render() {
    return (
      <div className="edit-form">
        <input type="text" onChange={this.changeName} placeholder="Name" />

        {/* Assign a corresponding handler */}
        <input type="text" placeholder="Surname" />

        {/* Same here */}
        <input type="text" placeholder="Technology" />
      </div>
    );
  }
}
