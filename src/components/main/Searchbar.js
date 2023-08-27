import { useState, useEffect, useRef } from "react";
import { MovieItem } from "./MovieItem";
import { getMovies, moveToSearchResult } from "../../utils";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const focusIndexRef = useRef(0);

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
        focusIndexRef.current = 0;
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
    switch (e.key) {
      case "Enter":
        if (focusIndexRef.current === 0) {
          moveToSearchResult({
            query: query,
          });
        } else {
          document.querySelector("#item" + focusIndexRef.current)?.click();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (focusIndexRef.current > 0) {
          focusIndexRef.current--;
        }
        document.querySelector("#item" + focusIndexRef.current)?.focus();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (focusIndexRef.current < results.length) {
          focusIndexRef.current++;
        }
        document.querySelector("#item" + focusIndexRef.current)?.focus();
        break;
      case "Backspace":
        focusIndexRef.current = 0;
        document.querySelector("#item0")?.focus();
        break;
    }
  };

  return (
    <div
      className={"main-searchbar" + (isFocused && query ? " active" : "")}
      onKeyDown={searchbarOnKeyDown}
    >
      <div className="main-searchbar-top">
        <div className="main-searchbar-top-wrap">
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            type="text"
            id="item0"
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
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      </div>
      <div className="main-searchbar-bottom">
        {results.map((movie, i) => (
          <MovieItem
            id={"item" + (i + 1)}
            movie={movie}
            onClick={movieItemOnClick}
          />
        ))}
      </div>
    </div>
  );
};
