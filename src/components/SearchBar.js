import React, { useState } from "react";
import styles from "./../styles/search.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [inputEl, setInputEl] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  /**
   * Clean query state when user click on close icon
   * and set focus to the search input
   */
  const cleanQuery = () => {
    setQuery("");
    inputEl.focus();
  };

  return (
    <div className={styles.searchbar}>
      <label>Movie Title</label>
      <div className={styles.searchbar_field}>
        <span className={`material-icons ${styles.loop}`}>search</span>
        <input
          type="text"
          name="query"
          className={query ? styles.filled : styles.empty}
          placeholder="Ex. The Avengers"
          onChange={handleChange}
          value={query}
          ref={(input) => setInputEl(input)}
        />
        {/* Show clean icon when user start to fill the input  */}
        {query && (
          <span
            onClick={cleanQuery}
            className={`material-icons ${styles.close}`}
          >
            close
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
