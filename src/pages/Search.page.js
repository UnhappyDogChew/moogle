export const SearchPage = () => {
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
            <div className="search-searchbar">
              <input type="text" name="query" autoComplete="off"></input>
              <button type="button">
                <i className="fa-solid fa-x"></i>
              </button>
              <button type="button" name="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="search-header-bottom">
            <label for="language">언어</label>
            <select name="language" id="language">
              <option value="ko-KR">한국어</option>
              <option value="en-US">영어</option>
              <option value="jp-JP">일본어</option>
              <option value="zh-HK">중국어(홍콩)</option>
              <option value="zh-CN">중국어(중국)</option>
            </select>
            <label for="include_adult">성인영화 포함</label>
            <input type="checkbox" id="include_adult" name="include_adult" />
            <label for="year">개봉년월</label>
            <input type="month" id="year" name="primary_release_year" />
          </div>
        </div>
      </header>
      <main className="search-container">
        <div className="search-container-wrap padding">
          <ol className="search-results">
            <li>
              <div className="search-results-item">
                <div className="background-wrap-gradient-white">
                  <h2>타이틀</h2>
                  <img
                    src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jjHccoFjbqlfr4VGLVLT7yek0Xn.jpg"
                    alt="포스터"
                  />
                  <span>평점: 8.515 점</span>
                  <p>blblblblblblababa</p>
                </div>
              </div>
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
