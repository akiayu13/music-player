import Sidebar from "./components/Sidebar/Sidebar";
import MusicList from "./components/MusicList/MusicList";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { useEffect } from "react";
import usePlayerStore from "./zustand/store";
import { fetchMusicData } from "./services/musicPlayerServices";
import Seeker from "./components/MusicPlayer/Seeker";
import SmallSeeker from "./components/MusicPlayer/SmallSeeker";
import SmallPlay from "./components/MusicPlayer/SmallPlay";

export default function App() {
  const setMusicData = usePlayerStore((state) => state.setMusicData);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const musicData = usePlayerStore((state) => state.musicData) || [];
  const playerPopup = usePlayerStore((state) => state.playerPopup);
  const setOriginalMusicData = usePlayerStore((state) => state.setOriginalMusicData);

  useEffect(() => {
    fetchMusicData()
      .then((data) => {
        setMusicData(data);
        setCurrentTrack(data?.[0]);
        setOriginalMusicData(data);
      })
      .catch((error) => console.log(error));
  }, [setMusicData]);

  return (
    <>
      {musicData?.length ? (
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
                "radial-gradient(circle, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))",
              filter: "blur(0px)",
              zIndex: -1,
            }}
          ></div>
          {playerPopup && <SmallPlay />}
          {/* <div className={`${playerPopup ? "opacity-0" : "opacity-100"}`}> */}
          <Sidebar />
          <MusicList />
          <MusicPlayer />
          {/* </div> */}

          <SmallSeeker />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
