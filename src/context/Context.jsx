import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songData } from "../data/music";

export const musicContext = createContext();

export default function MusicContextProvider({ children }) {
  const [musicData, setMusicData] = useState(songData);
  const [currSong, setCurrSong] = useState(songData[0]);

  const audioRef = useRef(new Audio(currSong.musicUrl));
  const playRef = useRef(null);
  const progressRef = useRef();
  const [backgroundSize, setBackgroundSize] = useState("0%");
  const [progressVal, setProgressVal] = useState(0);
  const [totalDuration, setTotalDuration] = useState(Infinity);

  const [currSongIndex, setCurrSongIndex] = useState(0);
  const nextIndex = () => {
    setCurrSongIndex((prev) => (prev + 1) % musicData.length);
  };
  const prevIndex = () => {
    setCurrSongIndex((prev) =>
      prev - 1 <= 0 ? musicData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (currSongIndex === 0 && !playRef.current) {
      return;
    }
    setCurrSong(musicData[currSongIndex]);
    playRef.current = true;
  }, [currSongIndex]);

  return (
    <musicContext.Provider
      value={{
        musicData,
        currSong,
        setCurrSong,
        audioRef,
        progressRef,
        playRef,
        prevIndex,
        nextIndex,
        backgroundSize,
        setBackgroundSize,
        progressVal,
        setProgressVal,
        totalDuration,
        setTotalDuration,
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
