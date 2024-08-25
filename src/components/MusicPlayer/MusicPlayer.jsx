import React from "react";
import Seeker from "./Seeker";
import MusicControls from "./MusicControls";

const MusicPlayer = () => {
  return (
    <div className=" flex items-center w-full sm:flex-col sm:w-[45%] h-[150px] sm:h-full bg-[rgba(255,255,255,0.3)]  sm:bg-transparent z-20 p-4">
      <div className="flex justify-center items-center">
        <img
          src="https://cms.samespace.com/assets/4f718272-6b0e-42ee-92d0-805b783cb471"
          alt="cover art"
          className="w-[50px] h-[50px] rounded"
        />
      </div>
      <div>
        <p>Title</p>
        <p>Sub title</p>
      </div>
      <div>
        <Seeker />
        <MusicControls />
      </div>
    </div>
  );
};

export default MusicPlayer;
