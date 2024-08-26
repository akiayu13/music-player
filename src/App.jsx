import Sidebar from "./components/Sidebar/Sidebar";
import MusicList from "./components/MusicList/MusicList";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { useEffect, useState } from "react";
import usePlayerStore from "./zustand/store";
import { fetchMusicData } from "./services/musicPlayerServices";
import Seeker from "./components/MusicPlayer/Seeker";
import SmallSeeker from "./components/MusicPlayer/SmallSeeker";
import SmallPlay from "./components/MusicPlayer/SmallPlay";
import Skeleton from "./components/Skeleton/Skeleton";

export default function App() {
  const setMusicData = usePlayerStore((state) => state.setMusicData);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const musicData = usePlayerStore((state) => state.musicData) || [];
  const playerPopup = usePlayerStore((state) => state.playerPopup);
  const setIsLoading = usePlayerStore((state) => state.setIsLoading);
  const setOriginalMusicData = usePlayerStore(
    (state) => state.setOriginalMusicData
  );

  useEffect(() => {
    fetchMusicData()
      .then((data) => {
        setMusicData(data);
        setCurrentTrack(data?.[0]);
        setOriginalMusicData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [setMusicData]);

  return (
    <>
      <div className="relative h-screen w-full flex flex-col sm:flex-row overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cms.samespace.com/assets/${currentTrack?.cover}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(30px)",
            zIndex: -1,
          }}
        ></div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.81))",
            filter: "blur(0px)",
            zIndex: -1,
          }}
        ></div>
        {playerPopup && <SmallPlay />}
        <Sidebar />
        <MusicList />
        <MusicPlayer />
        <SmallSeeker />
      </div>
    </>
  );
}
