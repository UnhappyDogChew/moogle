const POSTER_BASE_URL = "https://www.themoviedb.org/t/p/w1280";

export const MovieItem = ({ movie, onClick }) => {
  return (
    <div
      className="movie_item"
      onClick={() => {
        onClick(movie.title);
      }}
    >
      <div className="movie_item-wrap">
        <h2 className="movie_item-title">
          {movie.title}
          <span className="movie_item-year">
            {new Date(movie.release_date).getFullYear()}
          </span>
        </h2>
        <img
          className="movie_item-thumnail"
          src={POSTER_BASE_URL + movie.poster_path}
          alt="기생충"
        />
        <p className="movie_item-rating">평점 {movie.vote_average}</p>
        <p className="movie_item-overview">{movie.overview}</p>
      </div>
    </div>
  );
};
