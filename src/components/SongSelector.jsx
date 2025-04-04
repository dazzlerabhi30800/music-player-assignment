import React from "react";
import SearchBox from "./SearchBox";
import MusicContainer from "./MusicContainer";

const SongSelector = () => {
  return (
    <div className="song--wrapper">
      <h1>For You</h1>
      <SearchBox />
      <MusicContainer />
    </div>
  );
};

export default SongSelector;
