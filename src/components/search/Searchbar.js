import { useState } from "react";

export const Searchbar = ({ initialQuery, onChange, onEnter }) => {
  const [query, setQuery] = useState(initialQuery);

  const queryOnChange = (e) => {
    setQuery(e.target.value);
    onChange(e.target.value);
  };

  const queryOnKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  const onClearBtnClick = () => {
    setQuery("");
  };

  return (
    <div className="search-searchbar">
      <input
        type="text"
        name="query"
        autoComplete="off"
        onChange={queryOnChange}
        onKeyDown={queryOnKeyDown}
        value={query}
      />
      <button
        type="button"
        className={query ? "" : "hidden"}
        onClick={onClearBtnClick}
      >
        <i className="fa-solid fa-x"></i>
      </button>
      <button type="button" name="submit" onClick={onEnter}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};
