// src/components/IndianPlayers.js
import React from "react";

const IndianPlayers = () => {
  const team = ["Dhoni", "Virat", "Rohit", "Hardik", "Jadeja", "Pant"];

  // Destructuring into odd and even players
  const oddPlayers = team.filter((_, i) => i % 2 === 0);
  const evenPlayers = team.filter((_, i) => i % 2 !== 0);

  const T20players = ["Rohit", "Gill", "Hardik"];
  const RanjiTrophy = ["Pujara", "Saha", "Sarfaraz"];

  // Merge arrays using spread operator
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h3>Merged Players (T20 + Ranji):</h3>
      <ul>
        {allPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
