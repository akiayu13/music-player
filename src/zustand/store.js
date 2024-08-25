// zustand/store.js
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const playerStore = (set, get) => ({
  musicData: [],
  currentTrack: null,
  currentTab: 0,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  playerPopup: false,
  setMusicData: (data) => set({ musicData: data }),
  setCurrentTrack: (track) => set({ currentTrack: track }),
  setCurrentTab: (page) => set({ currentTab: page }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  setVolume: (volume) => set({ volume }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlayerPopup: (popup) => set({ playerPopup: popup }),
  nextTrack: () => {
    const { musicData, currentTrack } = get();
    const currentIndex = musicData.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextIndex = (currentIndex + 1) % musicData.length;
    set({ currentTrack: musicData[nextIndex] });
  },
  previousTrack: () => {
    const { musicData, currentTrack } = get();
    const currentIndex = musicData.findIndex(
      (track) => track.id === currentTrack.id
    );
    const previousIndex =
      (currentIndex - 1 + musicData.length) % musicData.length;
    set({ currentTrack: musicData[previousIndex] });
  },
});

const usePlayerStore = create(devtools(playerStore));
export default usePlayerStore;
