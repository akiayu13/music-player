// components/MusicControls.jsx
import React from "react";
import usePlayerStore from "../../zustand/store";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";

const MusicControls = () => {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const nextTrack = usePlayerStore((state) => state.nextTrack);
  const previousTrack = usePlayerStore((state) => state.previousTrack);

  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <button onClick={previousTrack}>
        {" "}
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
  );
};

export default MusicControls;
