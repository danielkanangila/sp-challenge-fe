import React from "react";
import { AnimatePresence } from "framer-motion";

import MovieListItem from "./../MovieListItem";
import styles from "./../../styles/nominations.module.scss";
import Banner from "../Banner";
import useNomination from "../../hooks/useNominations";
import { useHistory } from "react-router-dom";

const Nominations = () => {
  const { nominations, remove, count } = useNomination();
  const history = useHistory();

  return (
    <div className={styles.nominations}>
      <div className={styles.sub_wrapper}>
        <h2>Nominations</h2>
        <Banner
          message="Congratulations 🏆🎊 🎉. You reach five nominations."
          type="success"
          visibility={count === 5}
        />
        <div className={styles.nominates}>
          <AnimatePresence initial={false}></AnimatePresence>
          {nominations.map((movie) => (
            <MovieListItem
              {...movie}
              key={movie.imdbID}
              className={styles.movie_item}
              deleteAction={(id) => remove(id)}
              positionTransition
              initial={{ opacity: 0, x: 0, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              onClick={() => history.push(`/movies/${movie.imdbID}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nominations;
