import { create } from "zustand";

type FlyToType = [number, number] | null;

interface FlyToState {
  flyTo: FlyToType;
  setFlyTo: (coords: FlyToType) => void;
}

export const useFlyToStore = create<FlyToState>((set) => ({
  flyTo: null,
  setFlyTo: (coords) => set({ flyTo: coords }),
}));
