import React, { useContext } from "react";
import { setNominations } from "../../context/actions";
import { SearchContext } from "../../context/search-context";
import MovieCard from "../MovieCard";
import styles from "./../../styles/search-results.module.scss";

const SearchResults = () => {
  const [state, dispatch] = useContext(SearchContext);

  /** Nominate button onclick handler: call the dispatch function */
  const onNominate = (movie) => dispatch(setNominations(movie));

  /**
   * Check if the movie is already nominated to disable the nominate
   * button in the movie card
   */
  const isNominated = (imdbID) =>
    !!state.nominations.filter((movie) => movie.imdbID === imdbID).length;

  return (
    <div className={styles.search_results}>
      <h2>Results for "{state.query}" </h2>
      <div className={styles.card_container}>
        {state.results.map((movie) => (
          <MovieCard
            {...movie}
            key={movie.imdbID}
            onNominate={() => onNominate(movie)}
            nominated={isNominated(movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
