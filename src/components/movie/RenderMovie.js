import React from "react";
import BackButton from "../Back.Button";
import styles from "./../../styles/movie.module.scss";
import MovieContent from "./MovieContent";
import MovieNotFound from "./MovieNotFound";

const RenderMovie = ({ movie, onNominate, isNominate }) => {
  return (
    <div className={styles.movie}>
      <BackButton />
      <MovieContent
        movie={movie}
        onNominate={onNominate}
        isNominate={isNominate}
      />
      <MovieNotFound visibility={!movie} />
    </div>
  );
};

export default RenderMovie;
