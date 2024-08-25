import { create } from "zustand";
import { devtools } from "zustand/middleware";

const playerStore = (set) => ({
  musicData: [],
  currentTrack: null,
  currentTab: 0,
  setMusicData: (data) => set({ musicData: data }),
    setCurrentTrack: (track) => set({ currentTrack: track }),
  setCurrentTab: (page) => set({ currentTab: page }),
});

const usePlayerStore = create(devtools(playerStore));
export default usePlayerStore;
