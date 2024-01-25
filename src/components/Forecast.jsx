import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sun from "/day.svg";
import rain from "/rainy-6.svg";
import clearSky from "/day.svg";
import partlyCloudly from "/cloudy-day-3.svg";
import cloudly from "/cloudy.svg";
import { useWeatherContext } from "../context/WeatherContext";

function Forecast({ details, fetchWeatherData }) {
  const { weatherData, measure } = useWeatherContext();

  const convertTemperature = (celsius) => {
    if (measure === "fara") {
      const fahrenheit = (celsius * 9) / 5 + 32;
      return fahrenheit.toFixed(1);
    } else {
      return celsius.toFixed(1);
    }
  };

  const getWeatherDescription = (cloudBaseAvg) => {
    if (cloudBaseAvg < 1) {
      return { description: "Clear Sky", img: clearSky };
    } else if (cloudBaseAvg < 3) {
      return { description: "Partly Cloudy", img: partlyCloudly };
    } else {
      return { description: "Cloudy", img: cloudly };
    }
  };

  const sliderSettings = {
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium uppercase">daily forecast</p>
      </div>
      <hr className="my-2" />
      <Slider {...sliderSettings}>
        {weatherData?.timelines?.daily?.map((dailyForecast, index) => {
          const { description, img: weatherImg } = getWeatherDescription(
            dailyForecast.values.cloudBaseAvg
          );

          return (
            <div
              key={index}
              className="flex cursor-pointer flex-col text-white gap-y-0 items-center justify-center"
            >
              {new Date(dailyForecast.time).toLocaleDateString([], {
                weekday: "short",
              })}
              <img src={weatherImg} className="w-20" alt="" />
              <p className="font-medium px-7 mt-2">
                {convertTemperature(dailyForecast?.values?.temperatureAvg)}°
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Forecast;
