import React, { useCallback, useState } from "react";

import useApi from "./../../hooks/useApi";
import { search } from "./../../api/search";
import SearchField from "./SearchField";
import styles from "./../../styles/searchbar.module.scss";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const searchApi = useApi(search);

  const handleQuery = useCallback(
    async (query) => {
      if (!query) return cleanStates();
      const response = await searchApi.request(query);
      if (response.data.Response === "True") {
        setSearchResult(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
      } else {
        cleanStates();
      }
    },
    [searchApi]
  );

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
