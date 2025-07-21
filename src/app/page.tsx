"use client";

import TrailCard from "@/components/TrailCard";
import TrailCardMetadata from "@/components/TrailCardMetadata";
import { trails } from "@/data/trail-markers";
import { useFlyToStore } from "@/lib/useFlyToStore";
import { useGpxStore } from "@/lib/useGpxStore";
import { useRecordStore } from "@/lib/useRecordStore";
import { useEffect } from "react";

export default function Home() {
  const setFlyTo = useFlyToStore((state) => state.setFlyTo);
  const setGpx = useGpxStore((state) => state.setGpxList);
  const setMarkerList = useGpxStore((state) => state.setMarkerList);
  const setRecord = useRecordStore((state) => state.setRecord);

  const flyToHandler: (coordinates: [number, number]) => void = (
    coordinates
  ) => {
    setFlyTo(coordinates);
  };

  useEffect(() => {
    setRecord([]);
    setGpx([
      { gpxFile: "snow-day-hike.gpx", gpxColor: "green" },
      { gpxFile: "snow-west-ridge.gpx", gpxColor: "red" },
    ]);
    setMarkerList([]);
  }, [setGpx, setMarkerList, setRecord]);

  return (
    <div className="w-full shadow-lg rounded-none mb-5 gap-2 h-auto">
      {trails.map((trail, index) => (
        <TrailCard
          key={index}
          id={trail.id}
          imageSrc={trail.imageSrc}
          title={trail.title}
          participants={trail.participants}
          description={trail.description}
          flyTo={() => flyToHandler(trail.coordinates)}
        >
          <TrailCardMetadata
            duration={trail.duration}
            distance={trail.distance}
            ascent={trail.ascent}
            descent={trail.descent}
          />
        </TrailCard>
      ))}
    </div>
  );
}
