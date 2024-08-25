import Sidebar from "./components/Sidebar";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row">
      <Sidebar />
      <MusicList />
      <MusicPlayer />
    </div>
  );
}
