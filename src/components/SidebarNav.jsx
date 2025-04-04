import React from "react";

const SidebarNav = () => {
  const linkData = [
    {
      title: "For You",
      to: "#",
    },
    {
      title: "Top Tracks",
      to: "#",
    },
    {
      title: "Favourites",
      to: "#",
    },
    {
      title: "Recently Played",
      to: "#",
    },
  ];
  return (
    <nav className="navbar">
      <header>
        <img src="./logo.png" alt="Spotify" className="logo" />
        <ul className="links">
          {linkData?.map((link, index) => (
            <li key={index}>
              <a className={`${index === 0 && "highlight"}`} href={link.to}>
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
