import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
function Inputs() {
  return (
    <div className="flex flex-row justify-center md:my-6">
      <div className="flex flex-row w-3/4 items-center     justify-center space-x-2">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-lg placeholder:lowercase font-light p-1 sm:p-2 w-full shadow-xl focus:outline-none capitalize"
          name=""id=""/>
        <IoSearch className="cursor  pointer transition text-white ease-out hover:scale-125" size={25}/>
        <IoLocationOutline className="cursor  pointer text-white transition ease-out hover:scale-125" size={25}/>
      </div>
      <div className="flex flex-row w-1/4 items-center text-white justify-center">
        <button name="metric" className="text-xl font-light "> °C</button>
        <p className="text-xl mx-1">|</p>
        <button name="imperial" className="text-xl font-normal ">°F</button>

      </div>
    </div>
  );
}

export default Inputs;
