import React, { useCallback, useContext, useState } from "react";

import useApi from "./../../hooks/useApi";
import { search } from "./../../api/search";
import SearchField from "./SearchField";
import styles from "./../../styles/searchbar.module.scss";
import { SearchContext } from "../../context/search-context";
import { setResults, resetResult } from "./../../context/actions";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]); // used in autocomplete components
  const [totalResults, setTotalResults] = useState(0); // used in searchBar header
  const [_, dispatch] = useContext(SearchContext); // global state handler
  const searchApi = useApi(search); // api call helper

  const handleQuery = useCallback(
    async (query) => {
      if (!query) return cleanStates();
      // call the api
      const response = await searchApi.request(query);
      // if response, set response to local state and global state
      if (response.data.Response === "True") {
        setSearchResult(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
        // set search result to global state
        dispatch(
          setResults({
            ...response.data,
            query: query,
          })
        );
      } else {
        cleanStates();
        // reset global state to initial state except for query
        dispatch(resetResult(query));
      }
    },
    [searchApi]
  );
  /** Clean state if no result */
  const cleanStates = () => {
    setSearchResult([]);
    setTotalResults(0);
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar_header}>
        <label>Movie Title</label>
        {totalResults > 0 && <span>Total Results: {totalResults}</span>}
      </div>
      <SearchField handleQuery={handleQuery} searchResult={searchResult} />
    </div>
  );
};

export default SearchBar;
