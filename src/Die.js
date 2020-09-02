import React, { Component } from "react";
import "./Die.css";

const dieNums = ["one", "two", "three", "four", "five", "six"];

class Die extends Component {
  // create a handleClick function for this component
  // pass in the index of the particular die (so you know which die to lock)
  handleClick = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    // font awesome die icon with numbers that change dynamically
    let num = `fas fa-dice-${dieNums[this.props.val - 1]}`;
    return (
      <i
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
       
        
        <i className={num} ></i>
      </i>
    );
  }
}

export default Die;
