"use client";

import TrailCard from "@/components/TrailCard";
import TrailCardMetadata from "@/components/TrailCardMetadata";
import { trails } from "@/data/trail-markers";
import { useFlyToStore } from "@/lib/useFlyToStore";

export default function Home() {
  const setFlyTo = useFlyToStore((state) => state.setFlyTo);

  const flyToHandler = (coordinates: [number, number]) => {
    setFlyTo(coordinates);
  };

  return (
    <div className="w-full md:basis-[60%] max-w-3xl overflow-y-auto p-6 mx-auto">
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
