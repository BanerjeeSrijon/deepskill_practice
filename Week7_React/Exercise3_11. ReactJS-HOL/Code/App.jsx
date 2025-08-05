// src/App.js
import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConverter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 5,
    };

    // Bind methods
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleMultiple = this.handleMultiple.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  handleMultiple() {
    this.handleIncrement();
    this.sayHello();
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome(message) {
    alert(message);
  }

  handleOnPress(e) {
    alert("I was clicked");
    console.log("Synthetic Event:", e);
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <p>{this.state.count}</p>

        <button onClick={this.handleMultiple}>Increment</button>
        <br /><br />
        <button onClick={this.handleDecrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        <br /><br />
        <button onClick={this.handleOnPress}>Click on me</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
