import { create } from "zustand";

type gpxContent = {
  gpxFile: string;
  gpxColor: string;
};

type markerProps = {
  coordinates: [number, number];
  description: string;
  lat: number;
  lng: number;
  location: string;
};

interface useGpxState {
  gpxList: gpxContent[];
  setGpxList: (state: gpxContent[]) => void;
  markerList: markerProps[];
  setMarkerList: (state: markerProps[]) => void;
}

export const useGpxStore = create<useGpxState>((set) => ({
  gpxList: [],
  setGpxList: (newList) => set({ gpxList: newList }),
  markerList: [],
  setMarkerList: (newList) => set({ markerList: newList }),
}));
