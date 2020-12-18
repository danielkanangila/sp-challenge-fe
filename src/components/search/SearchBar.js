import React, { useCallback, useState } from "react";
import styles from "./../../styles/search.module.scss";
import SearchField from "./SearchField";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const handleQuery = useCallback((query) => {
    console.log(query);
  }, []);

  return (
    <div className={styles.searchbar}>
      <label>Movie Title</label>
      <SearchField handleQuery={handleQuery} searchResult={searchResult} />
    </div>
  );
};

export default SearchBar;
