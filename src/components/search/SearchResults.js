import React, { useContext } from "react";
import {
  sendNotification,
  setNominations,
  setResults,
} from "../../context/actions";
import useApi from "./../../hooks/useApi";
import { getNextPage } from "./../../api/search";
import { SearchContext } from "../../context/search-context";
import MovieCard from "../MovieCard";
import styles from "./../../styles/search-results.module.scss";

const SearchResults = () => {
  const [state, dispatch] = useContext(SearchContext);
  const searchApi = useApi(getNextPage);
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
          "success",
          3000
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

  /** Get search result next page */
  const onLoadMore = async () => {
    if (state.pages === state.currentPage.return) return;
    const response = await searchApi.request(
      state.query,
      state.currentPage + 1
    );
    // if response, set state and global state
    if (response.data.Response === "True") {
      // console.log(response);
      dispatch(
        setResults({
          ...state,
          currentPage: state.currentPage++,
          Search: [...state.results, ...response.data.Search],
        })
      );
    }
  };

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
      {/* pagination */}
      {state.pages > 1 && state.pages > state.currentPage && (
        <div className={styles.pagination}>
          <button onClick={onLoadMore} className="btn btn-primary">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
