"use client";

import TrailCard from "@/components/TrailCard";
import TrailCardMetadata from "@/components/TrailCardMetadata";
import { trails } from "@/data/trail-markers";
import { useFlyToStore } from "@/lib/useFlyToStore";
import { useGpxStore } from "@/lib/useGpxStore";
import { useEffect } from "react";

// import BackButton from "@/components/BackButton";
// import DynamicMap from "@/components/DynamicMap";
// import { trails } from "@/data/trail-markers";

export default function Home() {
  const setFlyTo = useFlyToStore((state) => state.setFlyTo);
  const setGpx = useGpxStore((state) => state.setGpxList);
  const setMarkerList = useGpxStore((state) => state.setMarkerList);

  const flyToHandler: (coordinates: [number, number]) => void = (
    coordinates
  ) => {
    setFlyTo(coordinates);
  };

  useEffect(() => {
    setGpx([
      { gpxFile: "snow-day-hike.gpx", gpxColor: "green" },
      { gpxFile: "snow-west-ridge.gpx", gpxColor: "red" },
    ]);
    setMarkerList([]);
  }, [setGpx, setMarkerList]);

  return (
    <div className="w-full shadow-lg bg-white rounded-none mb-5 gap-2 h-auto">
      {trails.map((trail, index) => (
        <TrailCard
          key={index}
          imageSrc={trail.imageSrc}
          title={trail.title}
          rating={trail.rating}
          ratingCount={trail.ratingCount}
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
