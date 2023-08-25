import { useState } from "react";
import { Searchbar } from "../components/Searchbar";

export const MainPage = () => {
  const [name, setName] = useState(0);

  return (
    <>
      <div className="main">
        <header className="main-header">
          <a href="/" title="moogle">
            🎥oogle
          </a>
        </header>
        <main className="main-container">
          <Searchbar />
        </main>
        <footer className="main-footer"></footer>
      </div>
    </>
  );
};
