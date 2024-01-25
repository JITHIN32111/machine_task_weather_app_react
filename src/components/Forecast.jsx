import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sun from "/day.svg";
import rain from "/rainy-6.svg";
import snow from "/snowy-3.svg";
import { useWeatherContext } from "../context/WeatherContext";

function Forecast({ details, fetchWeatherData }) {
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
  // const handleClick = (place) => {
  //   fetchWeatherData(place);
  //   console.log(place);
  // };
  const { weatherData } = useWeatherContext();
  return (
    <div>
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium uppercase">daily forecast</p>
      </div>
      <hr className="my-2" />
      <Slider {...sliderSettings}>
        {weatherData?.timelines?.daily?.map((dailyForecast, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col text-white gap-y-0 items-center justify-center"
          >
            {new Date(dailyForecast.time).toLocaleDateString([], {
              weekday: "short",
            })}{" "}
            {/* Use conditionals based on the forecast details */}
            {dailyForecast.values.cloudBaseAvg > 0.5 ? (
              <img src={rain} className="w-20" alt="" />
            ) : (
              <img src={sun} className="w-20" alt="" />
            )}
            <p className="font-medium px-7 mt-2">
              {dailyForecast?.values?.temperatureAvg}°
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Forecast;
