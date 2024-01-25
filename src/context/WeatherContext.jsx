import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
