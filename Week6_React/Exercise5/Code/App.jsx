import React from "react";
import CohortDetails from "./CohortDetails";
import "./App.css";

function App() {
  const cohorts = [
    {
      id: 1,
      name: "Web Development Fundamentals",
      startDate: "2023-01-15",
      endDate: "2023-04-15",
      participants: 24,
      status: "completed",
    },
    {
      id: 2,
      name: "Advanced React",
      startDate: "2023-05-10",
      endDate: "2023-08-10",
      participants: 18,
      status: "ongoing",
    },
    {
      id: 3,
      name: "Cloud Computing",
      startDate: "2023-03-01",
      endDate: "2023-06-01",
      participants: 22,
      status: "completed",
    },
  ];

  return (
    <div className="App">
      <h1>My Academy Cohorts</h1>
      <div className="cohorts-container">
        {cohorts.map((cohort) => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
