import React, { useEffect, useRef, useState } from "react";
import MusicAction from "./MusicAction";
import { useMusicContext } from "../context/Context";
import MusicProgressBar from "./MusicProgressBar";

const MusicPlayer = () => {
  const {
    currSong,
    audioRef,
    playRef,
    prevIndex,
    nextIndex,
    progressVal,
    setBackgroundSize,
    setProgressVal,
    totalDuration,
    setTotalDuration,
  } = useMusicContext();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause();
      return;
    }
    audioRef.current.play();
  }, [isPlaying]);
  useEffect(() => {
    if (!playRef.current) return;
    audioRef.current.src = currSong.musicUrl;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  }, [currSong]);
  // console.log(totalDuration);

  const handleTimeUpdate = () => {
    let currTime = audioRef.current.currentTime;
    setProgressVal(Math.floor(currTime));
    let bgSize = (currTime / Math.floor(audioRef.current.duration)) * 100 + "%";
    setBackgroundSize(bgSize);
    if (progressVal === totalDuration) {
      setIsPlaying(false);
      audioRef.current.currenTime = 0;
    }
  };

  const handleDuration = () => {
    setTotalDuration(Math.floor(audioRef.current.duration));
  };

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", handleDuration);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("loadedmetadata", handleDuration);
    };
  }, []);

  return (
    <div className="music--player--wrapper">
      <div className="music--player--container">
        <div className="song--header">
          <h2>{currSong.title}</h2>
          <p>{currSong.artistName}</p>
        </div>
        <div className="music--player">
          {/* Cover Art */}
          <img src={currSong.thumbnail} className="cover--art" alt="" />
          {/* Controls */}
          <div className="controls">
            {/* Progress bar */}
            <MusicProgressBar />
            {/* Controls */}
            <div className="music--playback--wrapper">
              <MusicAction />
              <div className="playback--container">
                <button onClick={prevIndex} className="playback--btn">
                  <i className="bi bi-rewind-fill"></i>
                </button>
                <button
                  onClick={() => setIsPlaying((prev) => !prev)}
                  className="play--btn"
                >
                  {isPlaying ? (
                    <i className="bi bi-pause-fill"></i>
                  ) : (
                    <i className="bi bi-play-fill"></i>
                  )}
                </button>
                <button onClick={nextIndex} className="playback--btn">
                  <i className="bi bi-fast-forward-fill"></i>
                </button>
              </div>
              {/* Volume Button */}
              <button className="volume--btn control--btn">
                <i className="bi bi-volume-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
