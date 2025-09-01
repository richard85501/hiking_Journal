"use client";

import { useRecordStore } from "@/lib/useRecordStore";
import ItineraryContainer from "../ui/Itinerary";

export const Itinerary = () => {
  const record = useRecordStore((state) => state.record);

  if (!record) {
    return null;
  }

  return (
    <ItineraryContainer.MainContainer>
      {record.map((log, idx) => (
        <ItineraryContainer.LogContainer key={idx}>
          {log}
        </ItineraryContainer.LogContainer>
      ))}
    </ItineraryContainer.MainContainer>
  );
};
