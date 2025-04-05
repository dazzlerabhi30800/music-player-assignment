import React, { useState } from "react";
import SearchBox from "./SearchBox";
import MusicContainer from "./MusicContainer";
import { useMusicContext } from "../context/Context";
import MenuBtn from "./MenuBtn";
import Resize from "../utils/useResize";

const SongSelector = () => {
  const [searchString, setSearchString] = useState("");
  const { tabTitle, showList } = useMusicContext();
  const size = Resize();
  return (
    <div
      className={`song--wrapper ${showList && "active"} ${size < 950 && "transition"}`}
    >
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
