import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";

import { SearchContext } from "../../context/search-context";
import MovieListItem from "./../MovieListItem";

import styles from "./../../styles/nominations.module.scss";
import { deleteNomination } from "../../context/actions";

const Nominations = () => {
  const [state, dispatch] = useContext(SearchContext);

  return (
    <div className={styles.nominations}>
      <div className={styles.sub_wrapper}>
        <h2>Nominations</h2>
        <div className={styles.nominates}>
          <AnimatePresence initial={false}></AnimatePresence>
          {state.nominations.map((movie) => (
            <MovieListItem
              {...movie}
              key={movie.imdbID}
              className={styles.movie_item}
              deleteAction={(id) => dispatch(deleteNomination(movie.imdbID))}
              positionTransition
              initial={{ opacity: 0, x: 0, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nominations;
