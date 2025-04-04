import React from "react";
import { useMusicContext } from "../context/Context";

const MusicProgressBar = () => {
  const {
    currSong,
    audioRef,
    progressRef,
    backgroundSize,
    progressVal,
    setProgressVal,
    setBackgroundSize,
    totalDuration,
  } = useMusicContext();
  const handleValue = (e) => {
    audioRef.current.currentTime = e.target.value;
    setProgressVal(Math.floor(e.target.value));
    const bgSize = (e.target.value / totalDuration) * 100 + "%";
    setBackgroundSize(bgSize);
  };

  const handleInput = (e) => {
    const bgSize = (e.target.value / totalDuration) * 100 + "%";
    setBackgroundSize(bgSize);
  };
  return (
    <div className="song--progress">
      <div className="progress--bar">
        <input
          onInput={handleInput}
          style={{ "--background-size": backgroundSize }}
          type="range"
          ref={progressRef}
          min="0"
          value={progressVal}
          onChange={handleValue}
          max={totalDuration || currSong.duration}
        />
      </div>
      <div className="song--progress--time">
        <p>0:00</p>
        <p>4:53</p>
      </div>
    </div>
  );
};

export default MusicProgressBar;
