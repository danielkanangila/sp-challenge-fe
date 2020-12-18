import React, { useContext } from "react";
import { SearchContext } from "../../context/search-context";
import MovieListItem from "./../MovieListItem";

import styles from "./../../styles/nominations.module.scss";

const Nominations = () => {
  const [state] = useContext(SearchContext);
  return (
    <div className={styles.nominations}>
      <div className={styles.sub_wrapper}>
        <h2>Nominations</h2>
        <div className={styles.nominates}>
          {state.nominations.map((movie) => (
            <MovieListItem
              {...movie}
              key={movie.imdbID}
              className={styles.movie_item}
              deleteAction={(id) => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nominations;
