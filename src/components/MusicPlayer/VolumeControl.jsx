// components/VolumeControl.jsx
import React from "react";
import usePlayerStore from "../../zustand/store";

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.volume = newVolume;
    }
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
      className="w-24"
    />
  );
};

export default VolumeControl;