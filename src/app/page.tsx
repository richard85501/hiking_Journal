"use client";

import DynamicMap from "@/components/DynamicMap";
import TrailCard from "@/components/TrailCard";
import TrailCardMetadata from "@/components/TrailCardMetadata";
import { useState } from "react";
import trails from "@/data/trail-markers";

export default function Home() {
  const [flyTo, setFlyTo] = useState<[number, number] | null>(null);

  const flyToHandler = (coordinates: [number, number]) => {
    setFlyTo(coordinates);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-chang">
      <nav className="w-full p-4 flex items-center justify-center sticky top-0 z-10">
        <h1 className="text-xl font-bold">Hiking Journal</h1>
      </nav>

      {/* 下面主體區塊，用 flex-row 排版 */}
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* 左邊區塊：可滾動，最大寬度限制 */}
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

        {/* 右邊區塊：大螢幕顯示，小螢幕隱藏 */}
        <div className="hidden md:block basis-[40%] p-6 sticky top-0 h-screen">
          <DynamicMap
            center={[24.383401, 121.231754]}
            zoom={15}
            markers={trails}
            flyTo={flyTo}
          />
        </div>
      </div>
    </div>
  );
}
