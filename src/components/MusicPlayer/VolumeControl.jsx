import React, { useState } from "react";
import usePlayerStore from "../../zustand/store";
import volumeIcon from "../../assets/volume.svg";
import muteIcon from "../../assets/mute.svg";
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const [isHovered, setIsHovered] = useState(false);
    console.log(volume);
    
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
      <img
        src={volume ? volumeIcon : muteIcon}
        alt="volume"
        className="w-6"
        onClick={() => {
          return volume ? setVolume(0) : setVolume(1);
        }}
      />
      {/* <div className="text-white cursor-pointer">{volume ? "vol" : "mute"}</div> */}
      {isHovered && (
        <div
          className="rotate-[-90deg] flex justify-center items-center absolute p-4  pt-6 translate-x-[-55px] translate-y-[-75px] rounded-lg z-50"
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
