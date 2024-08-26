import React from "react";
import usePlayerStore from "../../zustand/store";

const TabNavigation = () => {
  const currentTab = usePlayerStore((state) => state.currentTab);
  const handleTabChange = (key) => {
    usePlayerStore.getState().setCurrentTab(key);
  };
  return (
    <div className="flex gap-4 h-[64px] font-bold text-lg p-4 sm:p-6">
      <div
        className={`opacity-${currentTab === 0 ? 100 : 50} cursor-pointer`}
        onClick={() => handleTabChange(0)}
      >
        For You
      </div>
      <div
        className={`opacity-${currentTab === 1 ? 100 : 50} cursor-pointer`}
        onClick={() => handleTabChange(1)}
      >
        Top Tracks
      </div>
    </div>
  );
};

export default TabNavigation;
