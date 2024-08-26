import React, { useEffect } from "react";
import usePlayerStore from "../../zustand/store";
import Seeker from "./Seeker";
import MusicControls from "./MusicControls";
import AudioPlayer from "./AudioPlayer";
import back from "../../assets/back.png";
import VolumeControl from "./VolumeControl";

const SmallPlay = () => {
  const setPlayerPopup = usePlayerStore((state) => state.setPlayerPopup);
  const currentTrack = usePlayerStore((state) => state.currentTrack);

  if (!currentTrack) return null;

  return (
    <div className="absolute justify-center sm:relative flex items-center w-full flex-col h-full bg-transparent z-50 p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cms.samespace.com/assets/${currentTrack?.cover}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(30px)",
          zIndex: -1,
        }}
      ></div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.81))",
          filter: "blur(0px)",
          zIndex: -1,
        }}
      ></div>{" "}
      <div
        className="absolute top-0 left-0 p-5"
        onClick={() => setPlayerPopup(false)}
      >
        <img src={back} alt="back" className="w-6 opacity-90 cursor-pointer" />
      </div>
      <div className="flex w-full justify-center  gap-4 items-center flex-col-reverse pb-[100px] ">
        <div className="flex flex-col items-center gap-2 w-[60%] max-w-[300px]">
          <p className="text-base text-[1.8rem] font-bold">
            {currentTrack.name}
          </p>
          <p className="text-base font-light">{currentTrack.artist}</p>
        </div>{" "}
        <div className="relative w-[70%] aspect-square max-w-[300px]">
          <img
            src={`https://cms.samespace.com/assets/${currentTrack.cover}`}
            alt="cover art"
            className="absolute inset-0 w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="sm:w-[70%] bottom-5 absolute pb-[100px] flex justify-between w-full">
        {/* <Seeker /> */}
        <div className="opacity-0 w-10"></div>
        <div className="flex items-center justify-between">
          <MusicControls />
        </div>
        <VolumeControl />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default SmallPlay;
