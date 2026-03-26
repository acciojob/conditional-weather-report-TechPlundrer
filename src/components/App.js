
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });
  return (
    <div>
      
        {/* Do not remove the main div */}
        <weatherDisplay weather={weather} />
    </div>
  )
}
function weatherDisplay({ weather }) {
  const {temperature, conditions } = weather;

  const tempColor = temperature > 20 ? "red" : "blue";

  return (
      <div>
          <p>
              Temperature: <span style= {{color: tempColor}}>{temperature}</span>
          </p>
          <p>Conditions: {conditions}</p>
      </div>
  );
}
export default App
