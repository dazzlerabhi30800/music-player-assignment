import React from "react";
import { useMusicContext } from "../context/Context";

const MenuBtn = () => {
  const { showList, setShowList, setCurrTab, setTabTitle } = useMusicContext();
  const handleCloseList = () => {
    setShowList(false);
    setCurrTab("home");
    setTabTitle("For You");
  };
  return (
    <button onClick={handleCloseList} className="menu--btn">
      {!showList ? (
        <i className="bi bi-list"></i>
      ) : (
        <i className="bi bi-x-lg"></i>
      )}
    </button>
  );
};

export default MenuBtn;
