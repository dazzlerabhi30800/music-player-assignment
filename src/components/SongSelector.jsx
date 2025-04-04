import React, { useState } from "react";
import SearchBox from "./SearchBox";
import MusicContainer from "./MusicContainer";

const SongSelector = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="song--wrapper">
      <h1>For You</h1>
      <SearchBox
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <MusicContainer searchString={searchString} />
    </div>
  );
};

export default SongSelector;
