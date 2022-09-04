import { useState, React } from "react";

export const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, filter);
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.dataset.type);
    searchMovies(search, filter);
  };

  return (
    <div className="row search-main">
      <div className="col s12 row-search">
        <input
          className="validate"
          type="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="btn" onClick={() => searchMovies(search)}>
          Find
        </button>
      </div>

      <div className="row-filter">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={filter === 'all'}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={filter === 'movie'}
          />
          <span>Only movies</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={filter === 'series'}
          />
          <span>Only series</span>
        </label>
      </div>
    </div>
  );
};
