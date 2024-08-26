import TabNavigation from "./TabNavigation";
import SearchBar from "./SearchBar";
import SongCard from "./SongCard.jsx";
import usePlayerStore from "../../zustand/store.js";

const SkeletonLoader = () => (
  <div className="w-full h-[60px] flex items-center mb-2 bg-transparent rounded-lg animate-pulse">
    <div className="w-[48px] h-[48px] bg-[rgba(255,255,255,0.08)] rounded-full mx-4"></div>
    <div className="flex-1">
      <div className="h-4 bg-[rgba(255,255,255,0.08)] rounded mb-2 w-1/2"></div>
      <div className="h-3 bg-[rgba(255,255,255,0.08)] rounded w-1/4"></div>
    </div>
    <div className="h-4 w-10 bg-[rgba(255,255,255,0.08)] rounded"></div>
  </div>
);

const MusicList = () => {
  const songsList = usePlayerStore((state) => state.musicData);
  const currentTab = usePlayerStore((state) => state.currentTab);
  const isLoading = usePlayerStore((state) => state.isLoading); 

  return (
    <div className="w-full h-[calc(100%-250px)] sm:h-full sm:w-[35%] ">
      <TabNavigation />
      <SearchBar />
      <div className="h-[calc(100%-130px)] flex flex-col overflow-auto m-4 mx-4 sm:mx-0 no-scrollbar">
        {isLoading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 5 }).map((_, index) => <SkeletonLoader key={index} />)
        ) : songsList && songsList.length > 0 ? (
          songsList
            .filter((song) => !currentTab || song?.top_track == currentTab)
            .map((song) => <SongCard key={song.id} song={song} />)
        ) : (
          <div className="text-left text-gray-500">
            No songs available. Try searching for a different track.
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicList;
