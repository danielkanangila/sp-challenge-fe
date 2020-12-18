import React, { useState } from "react";
import styles from "./../styles/search.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(null); // track input focus to update the div.field className
  const [inputEl, setInputEl] = useState(null); // input element - used to set focus programmatically

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

  /**
   * Handle input focus and blur
   */
  const handleFocus = (status) => {
    setIsFocused(status);
  };

  /**
   * set search field className according to the state of input focus
   */
  const setSearchFieldClassName = () => {
    return isFocused
      ? `${styles.searchbar_field} ${styles.focused}`
      : styles.searchbar_field;
  };

  return (
    <div className={styles.searchbar}>
      <label>Movie Title</label>
      <div className={setSearchFieldClassName()}>
        <span className={`material-icons ${styles.loop}`}>search</span>
        <input
          type="text"
          name="query"
          className={query ? styles.filled : styles.empty}
          placeholder="Ex. The Avengers"
          onChange={handleChange}
          value={query}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
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
