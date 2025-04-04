import { useEffect, useState } from "react";

const Resize = () => {
  const [resize, setResize] = useState(window.innerWidth);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return resize;
};

export default Resize;
