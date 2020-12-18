import React, { useContext } from "react";
import { SearchContext } from "../../context/search-context";
import MovieCard from "../MovieCard";
import styles from "./../../styles/search-results.module.scss";

const SearchResults = () => {
  const [state] = useContext(SearchContext);
  return (
    <div className={styles.search_results}>
      <h2>Results for "{state.query}" </h2>
      <div className={styles.card_container}>
        {state.results.map((movie) => (
          <MovieCard {...movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
