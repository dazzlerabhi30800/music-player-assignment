import React, { useEffect, useRef, useState } from "react";

const MusicAction = () => {
  const [showAction, setShowAction] = useState(false);
  const ref = useRef();
  const handleClick = (e) => {
    if (ref && !ref.current.contains(e.target)) {
      setShowAction(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setShowAction((prev) => !prev)}
        className="control--btn"
        style={{ color: "white" }}
      >
        <i className="bi bi-three-dots"></i>
      </button>
      <div className={`action--wrapper ${showAction && "show"}`}>
        <button className="action--comp">
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default MusicAction;
