import React from "react";
import { fetchNextPage } from "./../../api/search";
import MovieCard from "../MovieCard";
import styles from "./../../styles/search-results.module.scss";
import useNomination from "../../hooks/useNominations";
import useSearch from "../../hooks/useSearch";

const SearchResults = () => {
  const { state, request } = useSearch(fetchNextPage); // omdb api and context api handler
  const nomination = useNomination(); // nomination handler

  /** Nominate button onclick handler: call the dispatch function
   * Can nominate only 5 movies
   */
  const onNominate = (movie) => nomination.nominate(movie);

  /** Get search result next page */
  const onLoadMore = async () => {
    if (state.pages === state.currentPage) return;
    /**
     * The line below call the omdb api to fetch the
     * data corresponding to the specified query
     * and dispatch the results to the context api state
     */
    await request(state.query, state.currentPage + 1);
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
            nominated={nomination.isNominate(movie.imdbID)}
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
