export const SearchResultItem = ({ movie }) => {
  return (
    <div
      className="search-results-item"
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")`,
      }}
    >
      <div className="background-wrap-gradient-white">
        <h2>
          <a href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`}>
            {movie.title}
          </a>
        </h2>
        <img
          src={
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
            movie.poster_path
          }
          alt="포스터"
        />
        <span>평점: {movie.vote_average} 점</span>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
