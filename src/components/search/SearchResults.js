import React, { useContext } from "react";
import { setResults } from "../../context/actions";
import useApi from "./../../hooks/useApi";
import { getNextPage } from "./../../api/search";
import { SearchContext } from "../../context/search-context";
import MovieCard from "../MovieCard";
import styles from "./../../styles/search-results.module.scss";
import useNomination from "../../hooks/useNominations";

const SearchResults = () => {
  const [state, dispatch] = useContext(SearchContext);
  const searchApi = useApi(getNextPage);
  const nomination = useNomination();
  /** Nominate button onclick handler: call the dispatch function
   * Can nominate only 5 movies
   */
  const onNominate = (movie) => nomination.nominate(movie);

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
