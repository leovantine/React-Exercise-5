import React, { Component } from "react";
export default class Profile extends Component {
  state = {
    register: [
      {
        name: "Kristen Stewart",
        age: 31,
        country: "USA"
      },
      {
        name: "Daniel Radcliffe",
        age: 32,
        country: "UK"
      },
      {
        name: "Emeraude Toubia",
        age: 32,
        country: "Canada"
      },
      {
        name: "Lily Collins",
        age: 32,
        country: "UK"
      },
      {
        name: "Anne Hathaway",
        age: 39,
        country: "USA"
      },
      {
        name: "Anna Diop",
        age: 34,
        country: "Senegal"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.register.map((item) => (
          <div>
            <h2>Name: {item.name}</h2>
            <h2>Age: {item.age}</h2>
            <h2>Country: {item.country}</h2>
          </div>
        ))}
      </div>
    );
  }
}
