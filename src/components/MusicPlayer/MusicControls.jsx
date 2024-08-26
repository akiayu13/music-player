// components/MusicControls.jsx
import React from "react";
import usePlayerStore from "../../zustand/store";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import VolumeControl from "./VolumeControl";

const MusicControls = () => {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const nextTrack = usePlayerStore((state) => state.nextTrack);
  const previousTrack = usePlayerStore((state) => state.previousTrack);

  return (
    <div className="flex justify-between items-center w-full">
      <button className="hidden sm:flex w-[35px]  justify-center items-center cursor-pointer gap-1 aspect-square rounded-[50%] bg-[rgba(255,255,255,0.08)]">
        <div className="w-[5px] aspect-square rounded-[50%] bg-white"></div>{" "}
        <div className="w-[5px] aspect-square rounded-[50%] bg-white"></div>{" "}
        <div className="w-[5px] aspect-square rounded-[50%] bg-white"></div>
      </button>
      <div className="flex items-center gap-4">
        <button onClick={previousTrack}>
          <img src={previous} alt="" className="w-4 opacity-50" />
        </button>
        <button onClick={togglePlay} className="w-8 h-8">
          {isPlaying ? (
            <img src={pause} alt="pause" className="w-8" />
          ) : (
            <img src={play} alt="play" className="w-8" />
          )}
        </button>
        <button onClick={nextTrack}>
          <img src={next} alt="" className="w-4 opacity-50" />{" "}
        </button>
      </div>
      <button className="hidden sm:block">
        {/* <img src="volume" alt="volume" /> */}
        <VolumeControl />
      </button>
    </div>
  );
};

export default MusicControls;
