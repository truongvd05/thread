import { create } from "zustand";

export const usePostModal = create((set) => ({
  reportOpen: false,
  openReport: () => set({ reportOpen: true }),
  closeReport: () => set({ reportOpen: false }),
}));
