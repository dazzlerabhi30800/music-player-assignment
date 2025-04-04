import React from "react";
import { useMusicContext } from "../context/Context";
import { formatTime } from "../utils/formatTime";

const MusicProgressBar = () => {
  const {
    currSong,
    audioRef,
    backgroundSize,
    progressVal,
    setProgressVal,
    setBackgroundSize,
    totalDuration,
    currDuration,
    setCurrDuration,
  } = useMusicContext();
  const handleValue = (e) => {
    audioRef.current.currentTime = e.target.value;
    setProgressVal(Math.floor(e.target.value));
    const bgSize = (e.target.value / totalDuration) * 100 + "%";
    setCurrDuration(e.target.value);
    setBackgroundSize(bgSize);
  };

  const handleInput = (e) => {
    const bgSize = (e.target.value / totalDuration) * 100 + "%";
    setCurrDuration(e.target.value);
    setBackgroundSize(bgSize);
  };
  return (
    <div className="song--progress">
      <div className="progress--bar">
        <input
          onInput={handleInput}
          style={{ "--background-size": backgroundSize }}
          type="range"
          min="0"
          value={progressVal}
          onChange={handleValue}
          max={totalDuration || currSong.duration}
        />
      </div>
      <div className="song--progress--time">
        <p>{formatTime(currDuration)}</p>
        <p>{formatTime(currSong.duration)}</p>
      </div>
    </div>
  );
};

export default MusicProgressBar;
