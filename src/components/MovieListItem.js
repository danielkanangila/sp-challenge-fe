import React from "react";
import styles from "./../styles/movie-list-item.module.scss";
import Image from "./Image";

const MovieListItem = ({ Poster, Title, Type, Year, onClick }) => {
  return (
    <div onClick={() => onClick(Title)} className={styles.movie_item}>
      <div className={styles.img_wrapper}>
        <Image source={Poster === "N/A" ? undefined : Poster} alt={Title} />
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

export default MovieListItem;
