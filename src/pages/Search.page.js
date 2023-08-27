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

  const makeMovePageURL = (page) =>
    window.location.pathname +
    window.location.search.replace(/page=\d+$/, `page=${page + 1}`);

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
      (yearRef.current ? `&year=${yearRef.current}` : "") +
      `&page=1`;
    window.location.href = url;
  };

  const onPrevBtnClick = () => {
    window.location.href = makeMovePageURL(page - 1);
  };

  const onNextBtnClick = () => {
    window.location.href = makeMovePageURL(page + 1);
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
          <section className="search-result-count">
            {totalResults}편의 검색 결과
          </section>
          <ol className="search-results">
            {results.map((movie) => (
              <li>
                <SearchResultItem movie={movie} />
              </li>
            ))}
          </ol>
        </div>
      </main>
      <footer className="search-footer">
        <nav className="search-nav-page">
          {page > 1 ? (
            <button
              type="button"
              className="search-nav-prev-btn"
              onClick={onPrevBtnClick}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          ) : null}
          <ol>
            {new Array(totalPages > 20 ? 20 : totalPages)
              .fill(0)
              .map((_, i) => (
                <li>
                  <a href={makeMovePageURL(i + 1)}>{i + 1}</a>
                </li>
              ))}
          </ol>
          {page < totalPages ? (
            <button
              type="button"
              className="search-nav-next-btn"
              onClick={onNextBtnClick}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          ) : null}
        </nav>
      </footer>
    </div>
  );
};
