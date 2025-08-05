// src/components/ListofPlayers.js
import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Gill", score: 45 },
    { name: "Rahul", score: 55 },
    { name: "Jadeja", score: 76 },
    { name: "Kohli", score: 34 },
    { name: "Surya", score: 90 },
    { name: "Pant", score: 60 },
    { name: "Shami", score: 35 },
    { name: "Bumrah", score: 80 },
    { name: "Kuldeep", score: 70 },
  ];

  // Filter players with score below 70
  const below70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
