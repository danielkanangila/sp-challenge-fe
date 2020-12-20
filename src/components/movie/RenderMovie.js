import React from "react";
import BackButton from "../Back.Button";
import styles from "./../../styles/movie.module.scss";
import MovieContent from "./MovieContent";

const RenderMovie = ({ movie, onNominate, isNominate }) => {
  return (
    <div className={styles.movie}>
      <BackButton />
      <MovieContent
        movie={movie}
        onNominate={onNominate}
        isNominate={isNominate}
      />
    </div>
  );
};

export default RenderMovie;
