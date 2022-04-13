import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

class AddContacts extends React.Component {

  // navigate = useNavigate();

  state = {
    name: "",
    phone: "",
  };

  add = (event) => {
    event.preventDefault();
    this.props.addContactHandler(this.state);

    this.setState({
      name: "",
      phone: "",
    });

    console.log(this.props);
    // console.log(props);
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="text"
              placeholder="Name"
              required
              value={this.state.name}
              onChange={(event) => {
                this.setState({
                  name: event.target.value,
                });
              }}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              className="number"
              placeholder="Contact Number"
              required
              value={this.state.phone}
              onChange={(event) => {
                this.setState({
                  phone: event.target.value,
                });
              }}
            />
          </div>
          {/* <Link to="/"> */}
            <button className="ui button green">Add Contact</button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default AddContacts;
