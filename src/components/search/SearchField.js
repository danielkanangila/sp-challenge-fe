import React, { useState } from "react";
import { Divider } from "../styled-components";
import styles from "./../../styles/search.module.scss";
import AutoComplete from "./AutoComplete";

/**
 *
 * @param {object} props
 * handleQuery: call back function that handle api call and result
 * searchResult: an array containing api response. Used for auto-completion purpose
 *
 */
const SearchField = ({ handleQuery, searchResult }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(null); // track input focus to update the div.field className
  const [inputEl, setInputEl] = useState(null); // input element - used to set focus programmatically
  const [autocompleteVisibility, setAutocomplete] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    /** API call callback function */
    handleQuery(e.target.value);
    // Setting divider visibility
    setAutocomplete(!!e.target.value);
  };

  const handleSubmit = (movieTitle) => {
    setQuery(movieTitle);
    handleQuery(movieTitle);
    // Setting divider visibility
    setAutocomplete(false);
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

  /**
   * Detect when user press enter: call submit handler function
   */
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit(query);
  };

  return (
    <div className={setSearchFieldClassName()}>
      <span className={`material-icons ${styles.icon} ${styles.loop}`}>
        search
      </span>
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
        autoComplete="off"
        onKeyDown={handleKeyDown}
      />
      {/* Show clean icon when user start to fill the input  */}
      {query && (
        <span
          onClick={cleanQuery}
          className={`material-icons ${styles.icon} ${styles.close}`}
        >
          close
        </span>
      )}
      {autocompleteVisibility && <Divider width="98%" />}
      <AutoComplete
        searchResult={searchResult}
        visibility={autocompleteVisibility}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SearchField;
