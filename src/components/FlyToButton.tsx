"use client";

import { useFlyToStore } from "@/lib/useFlyToStore";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

interface FlyToButtonProps {
  coordinates: [number, number];
}

const FlyToButton = ({ coordinates }: FlyToButtonProps) => {
  const setFlyTo = useFlyToStore((state) => state.setFlyTo);
  const [isSameCoordinates, setIsSameCoordinates] = useState(false);
  const flyTo = useFlyToStore((state) => state.flyTo);

  useEffect(() => {
    if (flyTo && flyTo[0] === coordinates[0] && flyTo[1] === coordinates[1]) {
      setIsSameCoordinates(true);
    } else {
      setIsSameCoordinates(false);
    }
  }, [flyTo, coordinates]);

  const handleFlyTo = () => {
    setFlyTo(coordinates);
  };

  return (
    <button
      onClick={handleFlyTo}
      className="absolute bottom-4 right-4 p-2 rounded-full shadow-md transition bg-white/80 hover:bg-white dark:bg-gray-700/80 dark:hover:bg-gray-700"
    >
      {!isSameCoordinates ? (
        <FaMapMarkerAlt className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <FaStar className="w-5 h-5 text-yellow-400 dark:text-gray-200" />
      )}
    </button>
  );
};

export default FlyToButton;
