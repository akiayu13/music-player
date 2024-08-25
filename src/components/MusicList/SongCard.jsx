import React from "react";
import usePlayerStore from "../../zustand/store";

const SongCard = ({ song }) => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);

  const handleTrackChange = () => {
    usePlayerStore.getState().setCurrentTrack(song);
  };

  return (
    <div
      className={`w-full h-[60px] z-0 flex justify-start items-center rounded-[8px] px-4 cursor-pointer 
        ${currentTrack?.id === song.id ? "bg-[rgba(255,255,255,0.08)]" : ""}
        hover:bg-[rgba(255,255,255,0.15)]`}
      onClick={handleTrackChange}
    >
      <div className="w-[48px] aspect-square">
        <img
          src={`https://cms.samespace.com/assets/${song.cover}`}
          className="w-full h-full rounded-full object-cover"
          alt={`${song.name} cover`}
        />
      </div>
      <p className="p-2 px-4 flex flex-col w-full text-normal">
        {song.name}
        <span className="text-sm font-normal">{song.artist}</span>
      </p>
    </div>
  );
};

export default SongCard;
