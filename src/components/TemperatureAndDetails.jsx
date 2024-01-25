import React from "react";
import img from '../../public/cloudy.svg'
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiSunrise } from "react-icons/wi";
import { GiSunset } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center  justify-center py-4 sm:py-2 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between sm:px-1 px-4 text-white py-3 sm:py-2">
        <img src={img} alt="" className="w-20"/>
       <p className="text-5xl">34°</p>
       <div className="flex flex-col space-y-2">
        <div className="flex font-light text-sm items-center justify-center">
        <FaTemperatureHigh size={18} className="mr-1"/>
        Real fell :
        <span className="font-medium ml-1">32°</span>
        </div>

        <div className="flex font-light text-sm items-center justify-center">
        <WiHumidity size={18} className="mr-1"/>
        Humidity :
        <span className="font-medium ml-1">62°</span>
        </div>


        <div className="flex font-light text-sm items-center justify-center">
        <FiWind size={18} className="mr-1"/>
        Wind:
        <span className="font-medium ml-1">11km/h</span>
        </div>

       </div>
      </div>

       <div className="flex flex-row items-center justify-center sm:space-x-2 space-x-1 text-white text-sm py-3">

       <WiSunrise/>
       <p className="font-light">Rise: <span className="font-medium ">6.45</span> </p>
       <p className="font-light">|</p>
       <GiSunset/>
       <p className="font-light">Set: <span className="font-medium ">6.45</span> </p>
       <p className="font-light">|</p>   <IoSunnySharp/>
       <p className="font-light">High: <span className="font-medium ">6.45</span> </p>
       <p className="font-light">|</p>   <IoSunnySharp/>
       <p className="font-light">Low: <span className="font-medium ">6.45</span> </p>
      
       </div>

    </div>
  );
}

export default TemperatureAndDetails;
