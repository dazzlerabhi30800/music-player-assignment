import React from "react";

const SearchBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="outer--search--box">
      <form onSubmit={handleSubmit} className="song--finder">
        <input type="text" placeholder="Search Song, Artist" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
