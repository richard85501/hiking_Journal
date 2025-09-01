// app/trail/[id]/components/ClientWrapper.tsx
"use client";

import { useGpxStore } from "@/lib/useGpxStore";
import { useRecordStore } from "@/lib/useRecordStore";
import { useEffect } from "react";
import type {
  articalMetadataEvent,
  articalContentEvent,
} from "@/data/artical-content";

interface ClientWrapperProps {
  meta: articalMetadataEvent;
  content: articalContentEvent;
  children: React.ReactNode;
}

export default function ClientWrapper({
  meta,
  content,
  children,
}: ClientWrapperProps) {
  const setGpx = useGpxStore((state) => state.setGpxList);
  const setMarkerList = useGpxStore((state) => state.setMarkerList);
  const setRecord = useRecordStore((state) => state.setRecord);

  useEffect(() => {
    // 設置 record
    setRecord(meta?.record);

    // 設置 GPX 和 markers
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
  }, [setGpx, setMarkerList, setRecord, meta, content]);

  return <>{children}</>;
}
