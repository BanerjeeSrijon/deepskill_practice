// src/App.js
import React from "react";

function App() {
  // JSX Element: Heading
  const heading = <h1 style={{ color: "navy" }}>🏢 Office Space Rental App</h1>;

  // Attribute in JSX: Image URL
  const imageUrl = "https://images.unsplash.com/photo-1593642634367-d91a135587b5";

  // Object: Single Office
  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "Bangalore, India"
  };

  // List of Offices
  const officeList = [
    {
      name: "Cyber Hub",
      rent: 75000,
      address: "Gurgaon"
    },
    {
      name: "MindSpace",
      rent: 50000,
      address: "Hyderabad"
    },
    {
      name: "Eco Space",
      rent: 62000,
      address: "Pune"
    }
  ];

  // Inline style function for rent color
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: "bold"
    };
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {heading}

      {/* Image Element with attribute */}
      <img src={imageUrl} alt="Office Space" style={{ width: "300px", borderRadius: "10px" }} />

      <h2>🏠 Single Office Info:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>₹{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>📋 Available Office Listings:</h2>
      {officeList.map((item, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px", borderRadius: "5px" }}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Rent:</strong> <span style={getRentStyle(item.rent)}>₹{item.rent}</span></p>
          <p><strong>Address:</strong> {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
