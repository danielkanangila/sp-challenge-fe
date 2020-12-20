import React, { useCallback } from "react";
import Banner from "./../Banner";
import useSearch from "./../../hooks/useSearch";
import { fetchByQuery } from "./../../api/search";
import SearchField from "./SearchField";
import styles from "./../../styles/searchbar.module.scss";

const SearchBar = () => {
  const { state, request, hasError } = useSearch(fetchByQuery); // omdb api and context api handlers

  const handleQuery = useCallback(
    async (query) => {
      if (!query) return;
      /**
       * The line below call the omdb api to fetch the
       * data corresponding to the specified query
       * and dispatch the results to the context api state
       */
      await request(query);
    },
    [request]
  );

  return (
    <>
      <Banner
        message="An error occurred while trying to fetch your query."
        visibility={hasError}
        type="danger"
      />
      <div className={styles.searchbar}>
        <div className={styles.searchbar_header}>
          <label>Movie Title</label>
          {state.totalResults > 0 && (
            <span>Total Results: {state.totalResults}</span>
          )}
        </div>
        <SearchField handleQuery={handleQuery} searchResult={state.results} />
      </div>
    </>
  );
};

export default SearchBar;
