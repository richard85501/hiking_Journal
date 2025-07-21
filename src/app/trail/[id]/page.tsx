"use client";

import TrailCardMetadata from "@/components/TrailCardMetadata";
import Image from "next/image";
import Gallery from "../../../components/Gallery";
import { artical_metadata, artical_content } from "@/data/artical-content";
import type {
  articalMetadataEvent,
  articalContentEvent,
} from "@/data/artical-content";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useGpxStore } from "@/lib/useGpxStore";
import React, { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import { useRecordStore } from "@/lib/useRecordStore";

export default function Artical() {
  const { id } = useParams();

  if (!id) {
    redirect("/");
  }

  const [meta, setMeta] = useState({} as articalMetadataEvent);
  const [content, setContent] = useState({} as articalContentEvent);
  const [loading, setLoading] = useState(true);
  const setGpx = useGpxStore((state) => state.setGpxList);
  const setMarkerList = useGpxStore((state) => state.setMarkerList);
  const setRecord = useRecordStore((state) => state.setRecord);

  useEffect(() => {
    const meta = artical_metadata.find(
      (item) => item.id === +id
    ) as articalMetadataEvent;
    const content = artical_content.find(
      (item) => item.id === +id
    ) as articalContentEvent;
    setMeta(meta);
    setContent(content);
    setRecord(meta?.record);
    if (meta?.gpxFile) {
      setGpx([
        {
          gpxFile: meta.gpxFile,
          gpxColor: meta.gpxColor,
        },
      ]);

      const markers = content.content.map((item) => {
        return {
          coordinates: item.coordinates,
          caption: item.caption,
          location: item.location,
          lat: item.coordinates[0],
          lng: item.coordinates[1],
        };
      });

      setMarkerList(markers);
    }
    setLoading(false);
  }, [
    setGpx,
    setMarkerList,
    setRecord,
    meta?.gpxColor,
    meta?.gpxFile,
    content?.content,
    id,
  ]);

  if (loading) {
    return (
      <main className="p-10 text-gray-500 dark:text-gray-400">
        <h1 className="text-xl">Loading Trail...</h1>
      </main>
    );
  }

  if (!meta?.title) {
    redirect("/");
  }

  return (
    <div className="w-full shadow-2xl bg-white  dark:bg-gray-800 rounded-none mb-5 gap-2 h-auto">
      <div className="relative w-full h-80 aspect-[3/2]">
        <Image
          src={meta.banner}
          fill
          alt={"banner"}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-row justify-between gap-2 mb-4">
          <div className="text-sm font-semibold bg-black text-white px-2 py-1 rounded w-fit">
            {meta.level}
          </div>

          <div className="flex items-center gap-2 text-yellow-500 flex-wrap sm:flex-nowrap">
            <FaStar />
            <span className="font-bold">{meta.rating}</span>
            <div className="flex items-center gap-1 ml-4">
              <BsFillPeopleFill />
              <span className="text-yellow-500">{meta.participants}</span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">{meta.title}</h1>
        <div className="text-sm text-gray-500 mb-2">{meta.date}</div>
        <TrailCardMetadata
          duration="11:00"
          distance="22 km"
          ascent="1800 m"
          descent="1800 m"
        />
        <p className="text-gray-600 text-md mb-2 dark:text-white">
          {meta.excerpt}
        </p>
        <Gallery items={content.content} />
      </div>
    </div>
  );
}
