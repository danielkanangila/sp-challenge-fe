import React, { useContext } from "react";
import { sendNotification, setNominations } from "../../context/actions";
import { SearchContext } from "../../context/search-context";
import MovieCard from "../MovieCard";
import styles from "./../../styles/search-results.module.scss";

const SearchResults = () => {
  const [state, dispatch] = useContext(SearchContext);

  /** Nominate button onclick handler: call the dispatch function
   * Can nominate only 5 movies
   */
  const onNominate = (movie) => {
    // check if nominations state is less than five
    if (state.nominations.length === 5)
      return dispatch(
        sendNotification("You can only nominate 5 movies 🚨.", "warning", 5000)
      );
    /**
     * Track nomination length,  If 5 movies are nominated send notification
     * */
    if (state.nominations.length === 4)
      dispatch(
        sendNotification(
          "Congratulations 🏆🎊 🎉. You reach five nominations.",
          "success"
        )
      );
    // if not call the dispatcher and add movie to the nomination array
    dispatch(setNominations(movie));
    /**
     * Track nomination length,  If 5 movies are nominated send notification
     * */
    if (state.nominations.length === 5)
      dispatch(
        sendNotification(
          "Congratulations 🏆🎊 🎉. You reach five nominations.",
          "success"
        )
      );
  };

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
