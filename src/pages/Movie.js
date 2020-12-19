import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByImdbID } from "../api/search";
import BackButton from "../components/Back.Button";
import useNomination from "../hooks/useNominations";
import useApi from "./../hooks/useApi";
import styles from "./../styles/movie.module.scss";

const Movie = () => {
  const [movie, setMovie] = useState({}); // local state
  const searchApi = useApi(getByImdbID); // api call handler
  const { nominate, isNominate } = useNomination(); // nominations handler
  const params = useParams(); // route params

  /** Call the api to get the movie corresponding to the movie imdbID */
  const getMovie = async (imdbID) => {
    const response = await searchApi.request(imdbID);
    // if api call success
    if (response.data.Response === "True") setMovie(response.data);
  };

  /**
   * Nomination button handler
   */
  const onNominate = () =>
    nominate(
      {
        ...movie,
        Year: movie.Released !== "N/A" ? movie.Released.split(" ")[2] : "N/A",
      },
      true
    );

  // track route params change and when component will mount
  useEffect(() => {
    // retrieve imdbID from params all call the getMovie function
    if (params.imdbID) getMovie(params.imdbID);
    return () => {};
  }, [params]);

  return (
    <div className={styles.movie}>
      <BackButton />
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
    </div>
  );
};

export default Movie;
