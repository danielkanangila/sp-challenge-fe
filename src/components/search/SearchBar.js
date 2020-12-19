import React, { useCallback, useContext } from "react";

import useApi from "./../../hooks/useApi";
import { search } from "./../../api/search";
import SearchField from "./SearchField";
import styles from "./../../styles/searchbar.module.scss";
import { SearchContext } from "../../context/search-context";
import { setResults, resetResult } from "./../../context/actions";

const SearchBar = () => {
  const [state, dispatch] = useContext(SearchContext); // get global state and dispatcher
  const searchApi = useApi(search); // api call helper

  const handleQuery = useCallback(
    async (query) => {
      if (!query) return;
      // call the api
      const response = await searchApi.request(query);
      // if response, set state and global state
      if (response.data.Response === "True") {
        dispatch(
          setResults({
            ...response.data,
            query: query,
          })
        );
      } else {
        // reset global state to initial state except for query
        dispatch(resetResult(query));
      }
    },
    [searchApi, dispatch]
  );

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar_header}>
        <label>Movie Title</label>
        {state.totalResults > 0 && (
          <span>Total Results: {state.totalResults}</span>
        )}
      </div>
      <SearchField handleQuery={handleQuery} searchResult={state.results} />
    </div>
  );
};

export default SearchBar;
