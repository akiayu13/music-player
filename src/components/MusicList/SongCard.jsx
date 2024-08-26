import React, { useEffect, useState } from "react";
import usePlayerStore from "../../zustand/store";

const SkeletonDuration = () => (
  <div className="w-16 h-4 bg-[rgba(255,255,255,0.08)] rounded animate-pulse"></div>
);

const SongCard = ({ song }) => {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const [duration, setDuration] = useState("Loading...");

  useEffect(() => {
    const audio = new Audio(`${song.url}`);

    const calculateDuration = () => {
      if (audio.duration) {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        setDuration(
          `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`
        );
      } else {
        setDuration("00:00");
      }
    };

    audio.addEventListener("loadedmetadata", calculateDuration);
    audio.addEventListener("canplaythrough", calculateDuration);

    audio.load();

    return () => {
      audio.removeEventListener("loadedmetadata", calculateDuration);
      audio.removeEventListener("canplaythrough", calculateDuration);
    };
  }, [song.url]);

  const handleTrackChange = () => {
    usePlayerStore.getState().setCurrentTrack(song);
  };

  return (
    <div
      className={`w-full h-[60px] z-0 flex justify-between items-center rounded-[8px] px-4 cursor-pointer 
        ${currentTrack?.id === song.id ? "bg-[rgba(255,255,255,0.08)]" : ""}
        hover:bg-[rgba(255,255,255,0.15)]`}
      onClick={handleTrackChange}
    >
      <div className="flex w-[80%] justify-start items-center min-w-[50px] h-full">
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
      <div>
        {duration === "Loading..." ? (
          <SkeletonDuration />
        ) : (
          duration
        )}
      </div>
    </div>
  );
};

export default SongCard;
