import React from "react";
import MusicControls from "./MusicControls";
import usePlayerStore from "../../zustand/store";

const MusicPlayer = () => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  return (
    <div className="!bottom-0 justify-between sm:justify-center sm:relative flex items-center w-full sm:flex-col sm:w-[45%] h-[70px] sm:h-full bg-[rgba(0,0,0,0.4)] sm:bg-transparent z-20 p-4">
      <div className="flex sm:w-full w-[60%] sm:justify-center  gap-4 items-center sm:flex-col-reverse">
        <div className="relative w-16 sm:w-[70%] aspect-square sm:max-w-[350px]">
          <img
            src={`https://cms.samespace.com/assets/${currentTrack.cover}`}
            alt="cover art"
            className="absolute inset-0 w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex flex-col sm:gap-2 sm:w-[70%] sm:max-w-[350px]">
          <p className="text-lg sm:text-[2rem] sm:font-bold">
            {currentTrack.name}
          </p>
          <p className="text-sm font-light">{currentTrack.artist}</p>
        </div>
      </div>

      <div>
        {/* <Seeker /> */}
        <MusicControls />
      </div>
    </div>
  );
};

export default MusicPlayer;
