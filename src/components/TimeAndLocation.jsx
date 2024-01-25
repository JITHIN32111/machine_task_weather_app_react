import React, { useState, useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";
function TimeAndLocation() {
  const { weatherData } = useWeatherContext();
  const [formattedDate, setFormattedDate] = useState("");
  const cityName = weatherData?.location?.name?.split(",")[0];
  useEffect(() => {
    const updateCurrentDate = () => {
      const now = new Date();

      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      const formattedDate = dateFormatter.format(now);

      const timeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const formattedTime = timeFormatter.format(now);

      setFormattedDate(`${formattedDate} | Local time ${formattedTime}`);
    };

    updateCurrentDate();

    const intervalId = setInterval(updateCurrentDate, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-md sm:text-xl font-extralight">
          {formattedDate}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{cityName}</p>{" "}
      </div>
    </div>
  );
}

export default TimeAndLocation;
