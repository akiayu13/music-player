import React from "react";

const SongCard = () => {
  return (
    <div className="w-full h-[60px]  z-0 flex justify-start items-center  px-4">
      <img src="" className="w-[40px] h-[40px] rounded-[50%]" alt="" />
      <p className="p-2 px-4 flex flex-col w-full text-normal">
        Song title
        <span className="text-sm font-normal">sub title</span>
      </p>
      <span>duration</span>
    </div>
  );
};

export default SongCard;
