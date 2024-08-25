import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-full h-[48px] px-4 bg-transparent">
      <input
        type="text"
        className="w-full rounded bg-[rgba(255,255,255,0.3) p-2 px-3"
        placeholder="Search Song, Artist"
      />
    </div>
  );
};

export default SearchBar;
