import React from "react";
import MovieListItem from "../MovieListItem";
import styles from "./../../styles/searchbar.module.scss";

const AutoComplete = ({ handleSubmit, searchResult, visibility }) => {
  const handleClick = (movieTitle) => {
    handleSubmit(movieTitle);
  };

  if (visibility) {
    return (
      <div className={styles.searchbar_auto__complete}>
        {searchResult.length === 0 && <h2>No movie much this title</h2>}
        {searchResult.length > 0 &&
          searchResult.map((result, index) => (
            <MovieListItem {...result} key={index} onClick={handleClick} />
          ))}
      </div>
    );
  } else return <></>;
};

export default AutoComplete;
