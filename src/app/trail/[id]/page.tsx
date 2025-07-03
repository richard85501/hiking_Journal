"use client";

import TrailCardMetadata from "@/components/TrailCardMetadata";
import Image from "next/image";
import Gallery from "../../../components/Gallery";
import {
  snow_day_hike_metadata,
  snow_day_hike_content,
} from "@/data/artical-content";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useGpxStore } from "@/lib/useGpxStore";
import { useEffect } from "react";

export default function Artical() {
  const setGpx = useGpxStore((state) => state.setGpxList);

  useEffect(() => {
    setGpx([
      {
        gpxFile: snow_day_hike_metadata.gpxFile,
        gpxColor: snow_day_hike_metadata.gpxColor,
      },
    ]);
  }, [setGpx]);

  return (
    <div className="w-full shadow-2xl bg-white rounded-none mb-5 gap-2 h-auto">
      <div className="relative w-full h-80 aspect-[3/2]">
        <Image
          src={snow_day_hike_metadata.banner}
          fill
          alt={"banner"}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="text-sm font-semibold bg-black text-white px-2 py-1 rounded">
            {snow_day_hike_metadata.level}
          </div>

          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="font-bold">{snow_day_hike_metadata.rating}</span>
            <span className="text-gray-500">
              ({snow_day_hike_metadata.reviews})
            </span>
            <div className="flex items-center gap-1 ml-4">
              <BsFillPeopleFill />
              <span className="text-gray-700">
                {snow_day_hike_metadata.participants}
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">
          {snow_day_hike_metadata.title}
        </h1>
        <div className="text-sm text-gray-500 mb-2">
          {snow_day_hike_metadata.date}
        </div>
        <TrailCardMetadata
          duration="11:00"
          distance="22 km"
          ascent="1800 m"
          descent="1800 m"
        />
        <p className="text-gray-600 text-md mb-2">
          小小荒謬的爬山，本來以為是一場可以看到很多老朋友的場合，結果到山腳才發現山社六路會師已經倒團，就剩下我們了，不過都在山腳下了，那就出發嚕！不出發也不對，所幸大家實力堅強，天氣也很好，快快樂樂的爬完了。（不過就從頭睡到尾就是了）
        </p>
        <Gallery items={snow_day_hike_content} />;
      </div>
    </div>
  );
}
