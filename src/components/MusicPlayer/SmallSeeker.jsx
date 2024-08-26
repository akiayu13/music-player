import React from "react";
import usePlayerStore from "../../zustand/store";
import "./Seeker.css";

const SmallSeeker = () => {
  const currentTime = usePlayerStore((state) => state.currentTime);
  const duration = usePlayerStore((state) => state.duration);
  const playerPopup = usePlayerStore((state) => state.playerPopup);
  const setCurrentTime = usePlayerStore((state) => state.setCurrentTime);

  const handleSeek = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      audioElement.currentTime = newTime;
    }
  };

  // Calculate the background size based on the progress
  const progressStyle = {
    background: `linear-gradient(to right, white ${(
      (currentTime / duration) *
      100
    ).toFixed(2)}%, rgba(255, 255, 255, 0.08) ${
      (currentTime / duration) * 100
    }%)`,
  };

  // Function to format time in MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className="seeker-wrapper block absolute bottom-[140px] py-0 sm:!hidden z-50"
      style={{ marginBottom: playerPopup ? "50px" : "0" }}
    >
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={currentTime}
        onChange={handleSeek}
        className="seeker w-full"
        style={progressStyle}
      />
      {playerPopup && (
        <div className="flex justify-between mt-1 px-2">
          <span className="text-white text-xs">{formatTime(currentTime)}</span>
          <span className="text-white text-xs">{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
};

export default SmallSeeker;
