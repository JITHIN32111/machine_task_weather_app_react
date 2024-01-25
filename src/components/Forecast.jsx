import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sun from "/day.svg";
import rain from "/rainy-6.svg";
import snow from "/snowy-3.svg";

function Forecast() {
  // Configuration for the react-slick slider
  const sliderSettings = {
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576, // Small devices (576px and up)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium devices (768px and up)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Large devices (992px and up)
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1600, // Extra-large devices (1200px and up)
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  

  return (
    <div>
      <div className="flex items-center justify-start my-2">
        <p className="text-white font-medium uppercase">Hourly forecast</p>
      </div>
      <hr className="my-2" />
      <Slider {...sliderSettings}>
        <div className="flex cursor-pointer flex-col text-white gap-y-0 items-center justify-center">
          <p className="font-light px-6 text-sm mb-2">4:30</p>
          <img src={sun} className="w-20" alt="" />
          <p className="font-medium px-7 mt-2" >22°</p>
        </div>

        <div className="flex flex-col text-white gap-y-0 items-center justify-center">
          <p className="font-light px-6 text-sm mb-2">4:30</p>
          <img src={snow} className="w-20 " alt="" />
          <p className="font-medium px-7 mt-2" >22°</p>
        </div>

        <div className="flex  flex-col text-white gap-y-0 items-center justify-center">
          <p className="font-light px-6 text-sm mb-2">4:30</p>
          <img src={sun} className="w-20 " alt="" />
          <p className="font-medium px-7 mt-2" >22°</p>
        </div>
        <div className="flex flex-col text-white gap-y-0 items-center justify-center">
          <p className="font-light px-6 text-sm mb-2">4:30</p>
          <img src={rain} className="w-20 " alt="" />
          <p className="font-medium px-7 mt-2" >22°</p>
        </div> 
        <div className="flex flex-col text-white gap-y-0 items-center justify-center">
          <p className="font-light px-6 text-sm mb-2">4:30</p>
          <img src={sun} className="w-20 " alt="" />
          <p className="font-medium px-7 mt-2" >22°</p>
        </div>
        {/* Add more forecast items as needed */}
      </Slider>
    </div>
  );
}

export default Forecast;
