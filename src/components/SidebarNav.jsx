import React from "react";
import { useMusicContext } from "../context/Context";
import Resize from "../utils/useResize";

const SidebarNav = () => {
  const { currTab, setCurrTab, setTabTitle, setShowList, showList } =
    useMusicContext();
  const linkData = [
    {
      title: "For You",
      label: "home",
      to: "#",
    },
    {
      title: "Top Tracks",
      label: "tracks",
      to: "#",
    },
    {
      title: "Favourites",
      label: "favorites",
      to: "#",
    },
    {
      title: "Recently Played",
      label: "recents",
      to: "#",
    },
  ];
  const resize = Resize();
  return (
    <nav className="navbar">
      <header>
        <img src="./logo.png" alt="Spotify" className="logo" />
        <ul className="links">
          {linkData?.map((link, index) => (
            <li key={index}>
              <a
                className={`${currTab === link.label && "highlight"}`}
                href="javascript:;"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrTab(link.label);
                  setTabTitle(link.title);
                  if (resize < 950) {
                    setShowList(true);
                  }
                  if (resize >= 950 && showList) {
                    setShowList(false);
                  }
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </header>
      {/* Profile Img */}
      <img
        className="cover--img"
        src="./profile-img.png"
        alt="Abhishek Choudhary"
      />
    </nav>
  );
};

export default SidebarNav;
