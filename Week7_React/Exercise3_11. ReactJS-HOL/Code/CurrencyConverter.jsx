// src/CurrencyConvertor.js
import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: "",
      currencyType: "EUR",
      converted: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    const { rupees, currencyType } = this.state;
    const amount = parseFloat(rupees);

    if (isNaN(amount)) {
      alert("Please enter a valid number.");
      return;
    }

    let rate = 1;

    // Conversion rates from INR
    if (currencyType === "EUR") {
      rate = 1 / 90; // Example: ₹90 = €1
    } else if (currencyType === "USD") {
      rate = 1 / 83; // Example: ₹83 = $1
    }

    const convertedAmount = (amount * rate).toFixed(2);

    this.setState({ converted: convertedAmount });
  }

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>

        <form>
          <label>
            Amount (INR):
            <input
              type="number"
              name="rupees"
              value={this.state.rupees}
              onChange={this.handleChange}
              placeholder="Enter amount in ₹"
            />
          </label>
          <br />
          <br />

          <label>
            Currency:
            <select
              name="currencyType"
              value={this.state.currencyType}
              onChange={this.handleChange}
            >
              <option value="EUR">Euro (EUR)</option>
              <option value="USD">US Dollar (USD)</option>
            </select>
          </label>
          <br />
          <br />

          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>

          {this.state.converted && (
            <p style={{ fontWeight: "bold", marginTop: "20px" }}>
              Converted Amount: {this.state.currencyType} {this.state.converted}
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
