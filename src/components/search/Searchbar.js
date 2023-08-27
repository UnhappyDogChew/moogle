export const Searchbar = ({ onChange, onEnter }) => {
  const queryOnChange = (e) => {
    onChange(e.target.value);
  };

  const queryOnKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div className="search-searchbar">
      <input
        type="text"
        name="query"
        autoComplete="off"
        onChange={queryOnChange}
        onKeyDown={queryOnKeyDown}
      ></input>
      <button type="button">
        <i className="fa-solid fa-x"></i>
      </button>
      <button type="button" name="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};
