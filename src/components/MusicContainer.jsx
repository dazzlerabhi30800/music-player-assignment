import React from "react";
import { useMusicContext } from "../context/Context";
import { formatTime } from "../utils/formatTime";

const MusicContainer = ({ searchString }) => {
  const { data, currTab, setCurrSong, playRef, currSong, setLoading } =
    useMusicContext();
  const handlePlayMusic = (music) => {
    setCurrSong(music);
    setLoading(true);
    if (!playRef.current) {
      playRef.current = true;
    }
  };
  const musicData = data[currTab];
  const filteredData = musicData.filter((music) =>
    music.title.toLowerCase().includes(searchString.toLowerCase())
  );
  if (filteredData.length === 0)
    return (
      <div className="empty--playlist">
        <p>No track found</p>
      </div>
    );
  return (
    <div className={`playlist--wrapper`}>
      {/* Comp */}
      {filteredData?.map((music) => {
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
