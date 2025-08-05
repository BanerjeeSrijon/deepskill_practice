// src/App.js
import React, { useState } from "react";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>🏏 Welcome to CricketApp</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle Component (Currently: {flag ? "List" : "Indian"})
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
