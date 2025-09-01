"use client";

import { useGpxStore } from "@/lib/useGpxStore";
import { useRecordStore } from "@/lib/useRecordStore";
import { useEffect } from "react";

const StoreInitializer = () => {
  const setGpx = useGpxStore((state) => state.setGpxList);
  const setMarkerList = useGpxStore((state) => state.setMarkerList);
  const setRecord = useRecordStore((state) => state.setRecord);

  useEffect(() => {
    setRecord([]);
    setGpx([
      { gpxFile: "snow-day-hike.gpx", gpxColor: "green" },
      { gpxFile: "snow-west-ridge.gpx", gpxColor: "red" },
    ]);
    setMarkerList([]);
  }, [setGpx, setMarkerList, setRecord]);

  return null;
};

export default StoreInitializer;
