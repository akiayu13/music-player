import { useState } from "react";
import usePlayerStore from "../../zustand/store";
import volumeIcon from "../../assets/volume.svg";
import muteIcon from "../../assets/mute.svg";
import "./VolumeControl.css";

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

  const sliderStyle = {
    background: `linear-gradient(to right, white ${
      volume * 100
    }%, rgba(255,255,255,0.08) ${volume * 100}%)`,
  };

  return (
    <div
      className="relative flex items-center pr-4 sm:pr-0 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[35px] aspect-square rounded-[50%] flex justify-center items-center hover:bg-transparent bg-[rgba(255,255,255,0.08)]">
        <img
          src={volume ? volumeIcon : muteIcon}
          alt="volume"
          className="w-5 sm:7 cursor-pointer"
          // onClick={() => volume ? setVolume(0) : setVolume(1)}
        />
      </div>
      {isHovered && (
        <div className="volume-popup">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="custom-slider"
            style={sliderStyle}
          />
        </div>
      )}
    </div>
  );
};

export default VolumeControl;
