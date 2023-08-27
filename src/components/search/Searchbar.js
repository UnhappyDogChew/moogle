export const Searchbar = () => {
  return (
    <div className="search-searchbar">
      <input type="text" name="query" autoComplete="off"></input>
      <button type="button">
        <i className="fa-solid fa-x"></i>
      </button>
      <button type="button" name="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};
