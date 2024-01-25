import React, { useState, useEffect } from "react";
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import {useGetLocation} from './costom_hook/UseLocation'
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const currentLocation = useGetLocation();
  const [place, setPlace] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=Pf5zCkolI2IovaOWHMmg0b7hHXOYcXnP&units=metric`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handlePlace = () => {
    fetchWeatherData(place);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  useEffect(() => {
    // Fetch weather data when the component mounts
    fetchWeatherData(currentLocation);
  }, [currentLocation]);
  return (
    <>
    {weatherData?(<div>
<div className='mx-auto  max-w-[370px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] 2xl:max-w-screen-lg  mt-4 py-5 px-4 sm:px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg'>
      <Inputs/>
      <TimeAndLocation/>
      <TemperatureAndDetails/>

    </div>
    <div className='mx-auto  max-w-[370px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] 2xl:max-w-screen-lg  mt-4 py-5 px-4 sm:px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg'>
    <Forecast/>
    <Forecast/>

    </div>
</div>):(<p>Loading weather data...</p>)}


    
    </>
    
  )
}

export default App
