import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  // create a handleClick function for this component
  // pass in the index of the particular die (so you know which die to lock)
  handleClick = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
