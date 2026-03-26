
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import weatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: "",
  });

  useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny"});
  }, []);

  return (
    <div>
      
        {/* Do not remove the main div */}
        <weatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
