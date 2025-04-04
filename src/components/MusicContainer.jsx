import React from "react";
import { useMusicContext } from "../context/Context";
import { formatTime } from "../utils/formatTime";

const MusicContainer = () => {
  const { musicData, setCurrSong, playRef, currSong } = useMusicContext();
  const handlePlayMusic = (music) => {
    setCurrSong(music);
    if (!playRef.current) {
      playRef.current = true;
    }
  };
  return (
    <div className="playlist--wrapper">
      {/* Comp */}
      {musicData?.map((music) => {
        const { id, title, thumbnail, artistName, duration } = music;
        return (
          <div
            className={`playlist--comp ${currSong.id === id && "active"}`}
            onClick={() => handlePlayMusic(music)}
            key={id}
          >
            {/* Cover photo , name & artist */}
            <div className="song--info--container">
              <img src={thumbnail} className="cover--img" alt={title} />
              <div className="song--text">
                <h3>{artistName}</h3>
                <p>{title}</p>
              </div>
            </div>
            {/* Duration */}
            <p className="duration">{formatTime(duration)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MusicContainer;
