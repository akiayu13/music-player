import React from "react";
import TabNavigation from "./TabNavigation";
import SearchBar from "./SearchBar";
import SongCard from "./SongCard.jsx";
import usePlayerStore from "../../zustand/store.js";

const MusicList = () => {
  const songsList = usePlayerStore((state) => state.musicData);
  const currentTab = usePlayerStore((state) => state.currentTab);

  return (
    <div className="w-full h-[calc(100%-250px)] sm:h-full sm:w-[35%] ">
      <TabNavigation />
      <SearchBar />
      <div className="h-[calc(100%-130px)] flex flex-col overflow-auto m-4 mx-4 sm:mx-0 no-scrollbar">
        {songsList && songsList.length > 0 ? (
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
