import MusicControls from "./MusicControls";
import usePlayerStore from "../../zustand/store";
import Seeker from "./Seeker";
import AudioPlayer from "./AudioPlayer";

const SkeletonCover = () => (
  <div className="relative w-12 sm:w-[70%] aspect-square sm:max-w-[350px] md:max-w-[500px] bg-[rgba(255,255,255,0.08)] animate-pulse">
    <div className="w-full h-full rounded"></div>
  </div>
);

const SkeletonText = () => (
  <div className="flex flex-col sm:gap-2 sm:w-[70%] sm:max-w-[350px] md:max-w-[500px]">
    <div className="w-full h-6 bg-[rgba(255,255,255,0.08)] rounded animate-pulse"></div>
    <div className="w-3/4 h-4 bg-[rgba(255,255,255,0.08)] rounded animate-pulse mt-2"></div>
  </div>
);

const SkeletonControls = () => (
  <div className="flex flex-col items-center justify-center sm:w-[70%] sm:max-w-[350px] md:max-w-[500px]">
    <div className="flex justify-center gap-4 mt-4">
      <div className="w-8 h-8 bg-[rgba(255,255,255,0.08)] rounded-full animate-pulse"></div>
      <div className="w-8 h-8 bg-[rgba(255,255,255,0.08)] rounded-full animate-pulse"></div>
      <div className="w-8 h-8 bg-[rgba(255,255,255,0.08)] rounded-full animate-pulse"></div>
    </div>
  </div>
);

const MusicPlayer = () => {
  const setPlayerPopup = usePlayerStore((state) => state.setPlayerPopup);
  const currentTrack = usePlayerStore((state) => state.currentTrack);

  if (!currentTrack) {
    return (
      <div className="relative pb-10 sm:pb-auto items-start justify-between sm:justify-center flex sm:items-center w-full sm:flex-col sm:w-[45%] h-[140px] sm:h-full bg-[rgba(0,0,0,0.4)] sm:bg-transparent z-20 p-4">
        <div className="cursor-pointer flex sm:w-full w-[60%] sm:justify-center gap-4 items-center sm:flex-col-reverse">
          <SkeletonCover />
          <SkeletonText />
        </div>
        <div className="sm:w-[70%] sm:max-w-[350px] md:max-w-[500px]">
          {/* <Seeker /> */}
          <SkeletonControls />
        </div>
        <AudioPlayer />
      </div>
    );
  }

  const handleClick = () => {
    const width = window.innerWidth;
    if (width > 640) return;
    setPlayerPopup(true);
  };

  return (
    <div className="relative pb-10 sm:pb-auto items-start justify-between sm:justify-center flex sm:items-center w-full sm:flex-col sm:w-[45%] h-[140px] sm:h-full bg-[rgba(0,0,0,0.4)] sm:bg-transparent z-20 p-4">
      <div
        onClick={handleClick}
        className="cursor-pointer flex sm:w-full w-[60%] sm:justify-center gap-4 items-center sm:flex-col-reverse"
      >
        <div className="relative w-12 sm:w-[70%] aspect-square sm:max-w-[350px] md:max-w-[500px]">
          <img
            src={`https://cms.samespace.com/assets/${currentTrack.cover}`}
            alt="cover art"
            className="absolute inset-0 w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex flex-col sm:gap-2 sm:w-[70%] sm:max-w-[350px] md:max-w-[500px]">
          <p className="text-base sm:text-[2rem] sm:font-bold">
            {currentTrack.name}
          </p>
          <p className="text-xs sm:text-lg font-light">{currentTrack.artist}</p>
        </div>
      </div>

      <div className="sm:w-[70%] sm:max-w-[350px] md:max-w-[500px]">
        <Seeker />
        <div className="flex items-center justify-between">
          <MusicControls />
        </div>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default MusicPlayer;
