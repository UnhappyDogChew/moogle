import { useState, useEffect } from "react";
import axios from "axios";
import { MovieItem } from "./MovieItem";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    axios.get("http://localhost:5000/search").then((res) => {
      setResults(res.data.results);
      setIsLoading(false);
    });
  }, [query]);

  const searchbarOnFocus = () => {
    setIsFocused(true);
  };

  const searchbarOnBlur = () => {
    window.addEventListener(
      "click",
      () => {
        setIsFocused(false);
      },
      { once: true }
    );
  };

  const searchbarOnChange = (e) => {
    setQuery(e.target.value);
  };

  const clearBtnOnClick = () => {
    setQuery("");
  };

  const movieItemOnClick = (title) => {
    setQuery(title);
  };

  return (
    <div className={"main-searchbar" + (isFocused && query ? " active" : "")}>
      <div className="main-searchbar-top">
        <div className="main-searchbar-top-wrap">
          <label for="search">검색</label>
          <input
            type="text"
            id="search"
            className="icon-search"
            name="query"
            value={query}
            autoComplete="off"
            onChange={searchbarOnChange}
            onFocus={searchbarOnFocus}
            onBlur={searchbarOnBlur}
          />
          <button
            type="button"
            className={"btn-icon-hidden" + (query ? "" : " hidden")}
            onClick={clearBtnOnClick}
          >
            취소
          </button>
        </div>
      </div>
      <div className="main-searchbar-bottom">
        {results.map((movie) => (
          <MovieItem movie={movie} onClick={movieItemOnClick} />
        ))}
      </div>
    </div>
  );
};