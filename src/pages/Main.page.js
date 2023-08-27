import { Searchbar } from "../components/Searchbar";

export const MainPage = () => {
  return (
    <>
      <div className="main">
        <header className="main-header">
          <h1 className="logo">
            <a href="/" title="moogle">
              🎥oogle
            </a>
          </h1>
        </header>
        <main className="main-container">
          <Searchbar />
        </main>
        <footer className="main-footer">
          powered by{" "}
          <a href="https://developer.themoviedb.org/">
            https://developer.themoviedb.org/
          </a>
        </footer>
      </div>
    </>
  );
};
