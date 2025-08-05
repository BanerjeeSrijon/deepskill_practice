import React, { useState } from "react";
import "./App.css";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <button>Book Ticket</button>
    </div>
  );
}

function App() {
  // State to check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable for page content
  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>Booking App</h1>

      {/* Conditional Button */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      {/* Render content based on login status */}
      {pageContent}
    </div>
  );
}

export default App;
