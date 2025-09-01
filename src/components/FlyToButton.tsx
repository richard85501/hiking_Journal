"use client";

import { useFlyToStore } from "@/lib/useFlyToStore";
import { useCallback } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface FlyToButtonProps {
  coordinates: [number, number];
}

const FlyToButton = ({ coordinates }: FlyToButtonProps) => {
  const setFlyTo = useFlyToStore((state) => state.setFlyTo);

  const handleFlyTo = useCallback(() => {
    setFlyTo(coordinates);
  }, [coordinates, setFlyTo]);

  return (
    <button
      className="absolute bottom-4 right-4 p-2 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
      onClick={handleFlyTo}
    >
      <FaMapMarkerAlt className="w-5 h-5 text-gray-800 dark:text-gray-200" />
    </button>
  );
};

export default FlyToButton;
