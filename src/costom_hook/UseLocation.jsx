
import React, { useState, useEffect } from "react";

export const useGetLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const handlePositionUpdate = (position) => {
      const newLat = position.coords.latitude;
      const newLong = position.coords.longitude;

      const coordinates = `${newLat},${newLong}`;
      fetchLocationData(coordinates);
    };

    const fetchLocationData = async (coordinates) => {
      try {
        const coordinateResponse = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${coordinates}&key=${import.meta.env.VITE_OPENCAGE_API_KEY}`
        );
        const coordinateData = await coordinateResponse.json();

        if (
          coordinateData &&
          coordinateData.results &&
          coordinateData.results.length > 0
        ) {
          setCurrentLocation(coordinateData.results[0].components.county);
          console.log(coordinateData.results[0].components.county);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    const watchId = navigator.geolocation.watchPosition(
      handlePositionUpdate,
      (error) => {
        console.error("Geolocation error:", error);
      });

    // Cleanup function to clear the watch position when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return currentLocation;
};