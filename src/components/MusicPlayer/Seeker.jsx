import usePlayerStore from "../../zustand/store";
import "./Seeker.css";

const Seeker = () => {
  const currentTime = usePlayerStore((state) => state.currentTime);
  const duration = usePlayerStore((state) => state.duration);
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


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="seeker-wrapper hidden sm:block z-20">
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={currentTime}
        onChange={handleSeek}
        className="seeker w-full"
        style={progressStyle}
      />
      <div className="flex justify-between mt-1">
        <span className="text-white text-xs">{formatTime(currentTime)}</span>
        <span className="text-white text-xs">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default Seeker;