import React from "react";
import styles from "./../../styles/movie.module.scss";
import MovieNotFound from "./MovieNotFound";

const MovieContent = ({ movie, onNominate, isNominate }) => {
  if (movie) {
    return (
      <div className={styles.main_content}>
        <div className={styles.poster}>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className={styles.content_txt}>
          <h2 className={styles.title}>{movie.Title}</h2>
          <p className={styles.description}>{movie.Plot}</p>
          <div className={styles.details}>
            <div className={styles.details_main}>
              <p>
                Ratings: <br />
                {movie.imdbRating}/10
              </p>
              <p>
                Time: <br />
                {movie.Runtime}
              </p>
              <p>
                Year: <br />
                {movie.Released}
              </p>
            </div>
            <button
              onClick={onNominate}
              className={`btn btn-default ${
                isNominate(movie.imdbID) ? "btn-disabled" : ""
              }`}
              disabled={isNominate(movie.imdbID)}
            >
              Nominate
            </button>
            <div className={styles.details_other}>
              <h4>Details:</h4>
              <p>Type: {movie.Type}</p>
              {movie.Type === "series" ? (
                <p>Seasons: {movie.totalSeasons}</p>
              ) : (
                ""
              )}
              <p>Genre: {movie.Genre}</p>
              <p>Director: {movie.Director}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Language: {movie.Language}</p>
              <p>Rated: {movie.Rated}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className={styles.main_content}>
        {" "}
        <MovieNotFound visibility={true} />{" "}
      </div>
    );
};

export default MovieContent;
