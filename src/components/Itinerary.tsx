"use client";

import { useRecordStore } from "@/lib/useRecordStore";

export const Itinerary = () => {
  const record = useRecordStore((state) => state.record);

  if (!record) {
    return null;
  }

  return (
    <div className="overflow-scroll">
      <div className="mt-5 overflow-y-auto h-96">
        {record.map((log, idx) => (
          <div
            key={idx}
            className="p-2 m-1 font-medium bg-black text-white rounded-md text-sm w-fit"
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};
