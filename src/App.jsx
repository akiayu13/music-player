import Sidebar from "./components/Sidebar/Sidebar";
import MusicList from "./components/MusicList/MusicList";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

export default function App() {
  return (
    <div className="relative h-screen w-full flex flex-col sm:flex-row">
      {/* Background with zoomed-in image, blur, and dark gradient overlay */}
      <div
        className="absolute inset-0 w-[200%] h-[200%] translate-x-[-10%] translate-y-[-10%] bg-cover bg-center"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),
            url('https://cms.samespace.com/assets/9fffafe9-9013-4846-8b5c-2b5dcbcd4b62')
          `,
          backgroundSize: "100%", 
          backgroundPosition: "center",
          filter: "blur(5px)", 
          zIndex: -1,
        }}
      ></div>

      {/* Main content */}
      <Sidebar />
      <MusicList />
      <MusicPlayer />
    </div>
  );
}
