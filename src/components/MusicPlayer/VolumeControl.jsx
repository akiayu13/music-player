import React, { useState } from "react";
import usePlayerStore from "../../zustand/store";

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const [isHovered, setIsHovered] = useState(false);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      audioElement.volume = newVolume;
    }
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-white cursor-pointer">{volume ? "vol" : "mute"}</div>
      {isHovered && (
        <div
          className="rotate-[-90deg] flex justify-center items-center absolute p-4  translate-x-[-50px] translate-y-[-70px] rounded-lg z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 rounded-lg appearance-none transform origin-bottom cursor-pointer"
            style={{
              backgroundSize: `${volume * 100}% 100%`,
              backgroundImage: `linear-gradient(to top, #ffffff ${
                volume * 100
              }%, rgba(255, 255, 255, 0.08) ${volume * 100}%)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VolumeControl;
