import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songData } from "../data/music";

export const musicContext = createContext();

export default function MusicContextProvider({ children }) {
  const [musicData, setMusicData] = useState(songData);
  const [currSong, setCurrSong] = useState(songData[0]);
  const [favMusic, setFavMusic] = useState(
    JSON.parse(localStorage.getItem("favData")) || [],
  );
  const [recentData, setRecentData] = useState(
    JSON.parse(sessionStorage.getItem("recents")) || [],
  );
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currTab, setCurrTab] = useState("home");
  const [tabTitle, setTabTitle] = useState("For You");

  const audioRef = useRef(new Audio(currSong.musicUrl));
  const playRef = useRef(null);
  const [backgroundSize, setBackgroundSize] = useState("0%");
  const [progressVal, setProgressVal] = useState(0);
  const [totalDuration, setTotalDuration] = useState(Infinity);
  const [currDuration, setCurrDuration] = useState(0);

  const [currSongIndex, setCurrSongIndex] = useState(0);

  // NOTE:  get the index of the curr song
  const getCurrSongIndex = () => {
    const findIndex = musicData.findIndex((music) => music.id === currSong.id);
    return findIndex ?? 0;
  };

  const nextIndex = () => {
    setLoading(true);
    const currIndex = getCurrSongIndex();
    setCurrSongIndex(() => (currIndex + 1) % musicData.length);
  };
  const prevIndex = () => {
    setLoading(true);
    const currIndex = getCurrSongIndex();
    setCurrSongIndex(() =>
      currIndex - 1 < 0 ? musicData.length - 1 : currIndex - 1,
    );
  };
  const data = {
    home: musicData,
    tracks: musicData,
    favorites: favMusic,
    recents: recentData,
  };

  useEffect(() => {
    if (currSongIndex === 0 && !playRef.current) {
      return;
    }
    setCurrSong(musicData[currSongIndex]);
    playRef.current = true;
  }, [currSongIndex]);

  useEffect(() => {
    sessionStorage.setItem("recents", JSON.stringify(recentData));
  }, [recentData]);

  useEffect(() => {
    localStorage.setItem("favData", JSON.stringify(favMusic));
  }, [favMusic]);

  const handleFav = (id, isFav) => {
    if (!isFav) {
      const findItem = musicData.find((music) => music.id === id);
      setFavMusic((prev) => [{ ...findItem }, ...prev]);
    } else {
      setFavMusic(favMusic.filter((music) => music.id !== id));
    }
  };

  const handleRecent = (id) => {
    const findIndex = recentData.findIndex((item) => item.id === id);
    const item = musicData.find((music) => music.id === id);
    if (findIndex < 0) {
      const newData = [...recentData];
      newData.unshift({ ...item });
      const slicedData = newData.slice(0, 10);
      setRecentData(() => [...slicedData]);
    } else {
      const newRecentData = recentData;
      newRecentData.splice(findIndex, 1);
      newRecentData.splice(0, 0, item);
      setRecentData(() => [...newRecentData.slice(0, 10)]);
    }
  };

  return (
    <musicContext.Provider
      value={{
        musicData,
        currSong,
        setCurrSong,
        audioRef,
        playRef,
        prevIndex,
        nextIndex,
        backgroundSize,
        setBackgroundSize,
        progressVal,
        setProgressVal,
        totalDuration,
        setTotalDuration,
        favMusic,
        setFavMusic,
        handleFav,
        currDuration,
        setCurrDuration,
        currTab,
        setCurrTab,
        data,
        handleRecent,
        tabTitle,
        setTabTitle,
        showList,
        setShowList,
        loading,
        setLoading,
      }}
    >
      {children}
    </musicContext.Provider>
  );
}

export const useMusicContext = () => {
  const context = useContext(musicContext);
  if (!context) {
    throw new Error("music context is not provided in the main comp");
  }
  return context;
};
