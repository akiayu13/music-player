import { create } from "zustand";
import { devtools } from "zustand/middleware";

const playerStore = (set) => ({});

const useStore = create(devtools(playerStore));
export default useStore;
