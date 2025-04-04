import React from "react";
import { useMusicContext } from "../context/Context";

const MenuBtn = () => {
  const { showList, setShowList } = useMusicContext();
  return (
    <button onClick={() => setShowList((prev) => !prev)} className="menu--btn">
      {!showList ? (
        <i className="bi bi-list"></i>
      ) : (
        <i className="bi bi-x-lg"></i>
      )}
    </button>
  );
};

export default MenuBtn;
