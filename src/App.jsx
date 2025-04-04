import MusicPlayer from "./components/MusicPlayer";
import SidebarNav from "./components/SidebarNav";
import SongSelector from "./components/SongSelector";
import { useMusicContext } from "./context/Context";
import "./styles/App.scss";

function App() {
  const { currSong } = useMusicContext();
  return (
    <>
      <main style={{ "--bg-1": currSong.bg1, "--bg-2": currSong.bg2 }}>
        <SidebarNav />
        <SongSelector />
        <MusicPlayer />
      </main>
    </>
  );
}

export default App;
