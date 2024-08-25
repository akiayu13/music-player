import React from "react";
import TabNavigation from "./TabNavigation";
import SearchBar from "./SearchBar";
import SongCard from "./SongCard.jsx";

const MusicList = () => {
  return (
    <div className="w-full h-[calc(100%-100px)] sm:h-full sm:w-[35%] ">
      <TabNavigation />
      <SearchBar />
      <div className="h-[calc(100%-64px)] flex-col overflow-auto m-4 mx-0">
        <SongCard /> <SongCard /> <SongCard /> <SongCard /> <SongCard />{" "}
        <SongCard /> <SongCard /> <SongCard />
      </div>
    </div>
  );
};

export default MusicList;
