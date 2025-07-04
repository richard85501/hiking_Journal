import { create } from "zustand";

type RecordTrpe = string[];

interface RecordState {
  record: RecordTrpe;
  setRecord: (coords: RecordTrpe) => void;
}

export const useRecordStore = create<RecordState>((set) => ({
  record: [],
  setRecord: (item) => set({ record: item }),
}));
