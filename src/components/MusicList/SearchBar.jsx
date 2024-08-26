import React, { useState, useCallback } from "react";
import usePlayerStore from "../../zustand/store";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const musicData = usePlayerStore((state) => state.originalMusicData);
  const currentTab = usePlayerStore((state) => state.currentTab);
  const setFilteredMusicData = usePlayerStore((state) => state.setMusicData);

  const onSearch = useCallback(
    (e) => {
      const term = e.target.value;
      setSearchTerm(term);

      setTimeout(() => {
        if (term) {
          let filteredData = musicData.filter(
            (song) =>
              song.name.toLowerCase().includes(term.toLowerCase()) ||
              song.artist.toLowerCase().includes(term.toLowerCase())
          );
          if (currentTab) {
            filteredData = filteredData.filter(
              (song) => song.top_track == currentTab
            );
          }
          setFilteredMusicData(filteredData);
        } else {
          setFilteredMusicData(musicData);
        }
      }, 1500);
    },
    [musicData, setFilteredMusicData]
  );

  return (
    <div className="flex w-full h-[48px] px-4 bg-transparent">
      <input
        type="text"
        className="w-full text-sm rounded-lg bg-[rgba(255,255,255,0.08)] p-2 px-3"
        placeholder="Search Song, Artist"
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
