import { create } from "zustand";

type gpxContent = {
  gpxFile: string;
  gpxColor: string;
};

interface useGpxState {
  gpxList: gpxContent[];
  setGpxList: (state: gpxContent[]) => void;
}

export const useGpxStore = create<useGpxState>((set) => ({
  gpxList: [],
  setGpxList: (newList) => set({ gpxList: newList }),
}));
