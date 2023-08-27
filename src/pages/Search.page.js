import { SearchResultItem } from "../components/search/SearchResultItem";
import { Searchbar } from "../components/search/Searchbar";
import { SearchOptionBar } from "../components/search/SearchOptionBar";
import { useEffect } from "react";
import { getMovies, parseSearch } from "../utils";

export const SearchPage = () => {
  useEffect(() => {
    const params = parseSearch(window.location.search);
    getMovies(
      params,
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  });

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
            <Searchbar />
          </div>
          <div className="search-header-bottom">
            <SearchOptionBar />
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
