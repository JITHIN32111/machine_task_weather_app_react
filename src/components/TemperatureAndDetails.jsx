import React from "react";
import img from "../../public/cloudy.svg";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiSunrise } from "react-icons/wi";
import { GiSunset } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
function TemperatureAndDetails({ details }) {
  console.log(":::::::::::::::");
  const firstMinuteTemperature =
    details?.timelines?.minutely?.[0]?.values?.temperature;
  const realFeel =
    details?.timelines?.minutely?.[0]?.values?.temperatureApparent;
  const humidity = details?.timelines?.minutely?.[0]?.values?.humidity;
  const wind = details?.timelines?.minutely?.[0]?.values?.windSpeed;
  const sunriseTimeString = details?.timelines?.daily?.[0]?.values?.sunriseTime;
  const sunsetTimeString = details?.timelines?.daily?.[0]?.values?.sunsetTime;
  const temperatureMax = details?.timelines?.daily?.[0]?.values?.temperatureMax;
  const temperatureMin = details?.timelines?.daily?.[0]?.values?.temperatureMin;

  const sunriseDate = new Date(sunriseTimeString);
  const sunsetDate = new Date(sunsetTimeString);

  const formattedSunriseTime = sunriseDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const formattedSunsetTime = sunsetDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    hour12: true,
  });

  return (
    <div>
      <div className="flex items-center  justify-center py-4 sm:py-2 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between sm:px-1 px-2 text-white py-3 sm:py-2">
        <img src={img} alt="" className="w-20" />
        <p className="sm:text-5xl text-4xl">{firstMinuteTemperature}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex ml-2 font-light text-sm items-center justify-center">
            <FaTemperatureHigh size={18} className="mr-1" />
            Real fell :<span className="font-medium ml-1">{realFeel}°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={18} className="mr-1" />
            Humidity :<span className="font-medium ml-1">{humidity}°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <FiWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{wind}km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center sm:space-x-2 space-x-1 text-white text-sm py-3">
        <WiSunrise />
        <p className="font-light">
          Rise: <span className="font-medium ">{formattedSunriseTime}</span>{" "}
        </p>
        <p className="font-light">|</p>
        <GiSunset />
        <p className="font-light">
          Set: <span className="font-medium ">{formattedSunsetTime}</span>{" "}
        </p>
        <p className="font-light">|</p> <IoSunnySharp />
        <p className="font-light">
          High: <span className="font-medium ">{temperatureMax}°</span>{" "}
        </p>
        <p className="font-light">|</p> <IoSunnySharp />
        <p className="font-light">
          Low: <span className="font-medium ">{temperatureMin}°</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
