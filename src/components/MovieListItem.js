import React from "react";
import styles from "./../styles/movie-list-item.module.scss";
import Image from "./Image";
import MouseHover from "./MouseHover";

const MovieListItem = ({
  imdbID,
  Poster,
  Title,
  Type,
  Year,
  className,
  deleteAction,
  onClick,
}) => {
  const handleClick = () => {
    onClick({ Poster, Title, Type, Year, className, onClick });
  };
  return (
    <div onClick={handleClick} className={`${styles.movie_item} ${className}`}>
      <div className={styles.img_wrapper}>
        <Image source={Poster === "N/A" ? undefined : Poster} alt={Title} />
      </div>
      <div className={styles.content_right}>
        <div className={styles.movie_details}>
          <h4>{Title}</h4>
          <span className={styles.text_small}>
            {Year} {Type}
          </span>
        </div>
        <Actions
          visibility={!!deleteAction}
          deleteHandler={() => deleteAction(imdbID)}
        />
      </div>
    </div>
  );
};

const Actions = ({ deleteHandler, visibility }) => {
  if (visibility) {
    return (
      <div className={styles.actions}>
        <DeleteAction deleteHandler={deleteHandler} />
      </div>
    );
  } else return <></>;
};

const DeleteAction = ({ deleteHandler }) => {
  return (
    <MouseHover>
      {(hover) => (
        <span
          onClick={deleteHandler}
          className={`material-icons ${styles.delete_actions}`}
        >
          {hover ? "delete" : "delete_outline"}
        </span>
      )}
    </MouseHover>
  );
};

export default MovieListItem;
