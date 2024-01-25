import React from "react";
function TimeAndLocation(currentPlace) {

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-md sm:text-xl font-extralight">
          Tuersday,31 may 2022 |Local time 12:46
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font-medium">
          {currentPlace &&
            currentPlace.currentPlace &&
            currentPlace.currentPlace.location &&
            currentPlace.currentPlace.location.name}
        </p>      </div>
    </div>
  );
}

export default TimeAndLocation;
