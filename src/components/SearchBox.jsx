import React from "react";

const SearchBox = ({ searchString, setSearchString }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="outer--search--box">
      <form onSubmit={handleSubmit} className="song--finder">
        <input
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          type="text"
          placeholder="Search Song, Artist"
        />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
