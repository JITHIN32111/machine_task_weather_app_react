import React, { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import { useGetLocation } from "./costom_hook/UseLocation";
import { useWeatherContext } from "./context/WeatherContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "/gif1.gif";
function App() {
  // const [weatherData, setWeatherData] = useState(null);
  const currentLocation = useGetLocation();
  const [place, setPlace] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);
  const { weatherData, updateWeatherData } = useWeatherContext();
  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${import.meta.env.VITE_TOMMORROW_IO_API}`,
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
  
      
      updateWeatherData(data);
    } catch (error) {
      toast.error("Error fetching weather data", {
        position: "top-center", // Set the position directly
      });
      console.error("Error fetching weather data:", error);
    }
  };
  
  
  // const fetchWeatherData = async (location) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=b346aGinLGpyKiAcstfdwi4nNdR8cby8`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     setWeatherData(data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  useEffect(() => {
    // Fetch weather data when the component mounts
    if (currentLocation) {
      fetchWeatherData(currentLocation);
    }
  }, [currentLocation]);
  return (
    <>
      <ToastContainer />
      {weatherData ? (
        <div>
          <div className="mx-auto  max-w-[370px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] 2xl:max-w-screen-lg  mt-4 py-5 px-4 sm:px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
            <Inputs fetchWeatherData={fetchWeatherData} />
            <TimeAndLocation />
            <TemperatureAndDetails  />
          </div>
          <div className="mx-auto  max-w-[370px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] 2xl:max-w-screen-lg  mt-4 py-5 px-4 sm:px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
            <Forecast
            
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
        <img className="w-1/2 h-auto" src={gif} alt="" />
      </div>
      
      )}
    </>
  );
}

export default App;
