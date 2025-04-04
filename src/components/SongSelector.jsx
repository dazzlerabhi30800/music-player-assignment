import React, { useState } from "react";
import SearchBox from "./SearchBox";
import MusicContainer from "./MusicContainer";
import { useMusicContext } from "../context/Context";
import MenuBtn from "./MenuBtn";

const SongSelector = () => {
  const [searchString, setSearchString] = useState("");
  const { tabTitle, showList } = useMusicContext();
  return (
    <div className={`song--wrapper ${showList && "active"}`}>
      <MenuBtn />
      <h1>{tabTitle}</h1>
      <SearchBox
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <MusicContainer searchString={searchString} />
    </div>
  );
};

export default SongSelector;
