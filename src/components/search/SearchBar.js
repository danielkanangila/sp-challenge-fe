import React, { useCallback, useState } from "react";

import useApi from "./../../hooks/useApi";
import { search } from "./../../api/search";
import SearchField from "./SearchField";
import styles from "./../../styles/search.module.scss";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const searchApi = useApi(search);

  const handleQuery = useCallback(
    async (query) => {
      if (!query) return;
      const response = await searchApi.request(query);
      if (response.data.Response === "True")
        setSearchResult(response.data.Search);
      else setSearchResult([]);
    },
    [searchApi]
  );

  return (
    <div className={styles.searchbar}>
      <label>Movie Title</label>
      <SearchField handleQuery={handleQuery} searchResult={searchResult} />
    </div>
  );
};

export default SearchBar;
