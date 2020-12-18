import React from "react";
import styles from "./../../styles/search.module.scss";

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
            <AutoCompleteItem {...result} key={index} onClick={handleClick} />
          ))}
      </div>
    );
  } else return <></>;
};

// The properties have first capital letter as defined in the api side,
// are not react components.
const AutoCompleteItem = ({ Poster, Title, Type, Year, onClick }) => {
  return (
    <div
      onClick={() => onClick(Title)}
      className={styles.searchbar_auto__complete___item}
    >
      <div className={styles.img_wrapper}>
        {Poster !== "N/A" && <img src={Poster} alt={Title} />}
      </div>
      <div className={styles.movie_details}>
        <h4>{Title}</h4>
        <span>
          {Year} {Type}
        </span>
      </div>
    </div>
  );
};

export default AutoComplete;
