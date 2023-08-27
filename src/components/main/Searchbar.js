import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";
import { getMovies, moveToSearchResult } from "../../utils";

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
    const debounce = setTimeout(() => {
      getMovies(
        {
          query: query,
          include_adult: false,
          language: "ko-KR",
        },
        (res) => {
          setResults(res.data.results);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
        }
      );
    }, 300);
    return () => clearTimeout(debounce);
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
    moveToSearchResult({
      query: title,
    });
  };

  const searchbarOnKeyDown = (e) => {
    if (e.key === "Enter") {
      moveToSearchResult({
        query: query,
      });
    }
  };

  return (
    <div className={"main-searchbar" + (isFocused && query ? " active" : "")}>
      <div className="main-searchbar-top">
        <div className="main-searchbar-top-wrap">
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
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
            onKeyDown={searchbarOnKeyDown}
          />
          <button
            type="button"
            className={"btn-icon-hidden" + (query ? "" : " hidden")}
            onClick={clearBtnOnClick}
          >
            <i className="fa-solid fa-x"></i>
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
