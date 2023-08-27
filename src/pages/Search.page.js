import { SearchResultItem } from "../components/search/SearchResultItem";
import { Searchbar } from "../components/search/Searchbar";
import { SearchOptionBar } from "../components/search/SearchOptionBar";
import { useEffect, useRef, useState } from "react";
import { getMovies, parseSearch } from "../utils";

export const SearchPage = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [results, setResults] = useState([]);

  const queryRef = useRef("");
  const languageRef = useRef("ko-KR");
  const includeAdultRef = useRef(false);
  const yearRef = useRef("");

  useEffect(() => {
    const params = parseSearch(window.location.search);
    getMovies(
      params,
      (res) => {
        setPage(res.data.page);
        setTotalPages(res.data.total_pages);
        setTotalResults(res.data.total_results);
        setResults(res.data.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const onQueryChange = (query) => {
    queryRef.current = query;
  };

  const onLanguageChange = (language) => {
    languageRef.current = language;
  };

  const onIncludeAdultChange = (includeAdult) => {
    includeAdultRef.current = includeAdult;
  };

  const onMonthChange = (month) => {
    yearRef.current = month.split("-")[0];
  };

  const onEnter = () => {
    const url =
      `/search?query=${queryRef.current}&language=${languageRef.current}&include_adult=${includeAdultRef.current}` +
      (yearRef.current ? `&year=${yearRef.current}` : "");
    window.location.href = url;
  };

  return (
    <div className="search">
      <header className="search-header">
        <div className="search-header-wrap padding">
          <div className="search-header-top">
            <h1 className="logo">
              <a href="/" title="moogle">
                🎬oogle
              </a>
            </h1>
            <Searchbar onChange={onQueryChange} onEnter={onEnter} />
          </div>
          <div className="search-header-bottom">
            <SearchOptionBar
              onLanguageChange={onLanguageChange}
              onIncludeAdultChange={onIncludeAdultChange}
              onMonthChange={onMonthChange}
            />
          </div>
        </div>
      </header>
      <main className="search-container">
        <div className="search-container-wrap padding">
          <ol className="search-results">
            <li>
              <SearchResultItem />
            </li>
          </ol>
        </div>
      </main>
      <footer className="search-footer">
        <nav className="search-nav-page">
          <button type="button" className="search-nav-prev-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <ol>
            <li>
              <a href="/search?page=1">1</a>
            </li>
            <li>
              <a href="/search?page=1">2</a>
            </li>
            <li>
              <a href="/search?page=1">3</a>
            </li>
          </ol>
          <button type="button" className="search-nav-next-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </nav>
      </footer>
    </div>
  );
};
