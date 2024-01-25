import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [measure, setMeasure] = useState("celcious");
  const updateWeatherData = (data) => {
    setWeatherData(data);
  };
  const updateMeasure = (newMeasure) => {
    setMeasure(newMeasure);
  };
  return (
    <WeatherContext.Provider value={{  weatherData, updateWeatherData, measure, updateMeasure }}>
      {children}
    </WeatherContext.Provider>
  );
};
