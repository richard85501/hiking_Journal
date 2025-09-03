"use client";

import { useGpxStore } from "@/lib/useGpxStore";
import { useRecordStore } from "@/lib/useRecordStore";
import { useEffect } from "react";
import type { articalMetadataEvent } from "@/data/artical-content";

const StoreInitializer = ({
  artical_metadata,
}: {
  artical_metadata: articalMetadataEvent[];
}) => {
  const setGpx = useGpxStore((state) => state.setGpxList);
  const setMarkerList = useGpxStore((state) => state.setMarkerList);
  const setRecord = useRecordStore((state) => state.setRecord);

  useEffect(() => {
    const gpxData = artical_metadata.map((item) => {
      return { gpxFile: item.gpxFile, gpxColor: item.gpxColor };
    });
    setRecord([]);
    setGpx(gpxData);
    setMarkerList([]);
  }, [setGpx, setMarkerList, setRecord, artical_metadata]);

  return null;
};

export default StoreInitializer;
