import MusicPlayer from "./components/MusicPlayer";
import SidebarNav from "./components/SidebarNav";
import SongSelector from "./components/SongSelector";
import "./styles/App.scss";

function App() {
  return (
    <>
      <main>
        <SidebarNav />
        <SongSelector />
        <MusicPlayer />
      </main>
    </>
  );
}

export default App;
