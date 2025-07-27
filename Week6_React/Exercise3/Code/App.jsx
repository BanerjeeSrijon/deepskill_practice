// src/App.js
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Srinjoy Sen Chowdhury"
        school="TMSL"
        total={445}
        goal={5}
      />
    </div>
  );
}

export default App;
