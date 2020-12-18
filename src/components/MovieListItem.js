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
  /** Handle click on card */
  const handleClick = () => {
    onClick({ imdbID, Poster, Title, Type, Year, className, onClick });
  };
  /** handle only click on delete icon */
  const handleDeleteAction = (e) => {
    e.stopPropagation();
    deleteAction(imdbID);
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
          deleteHandler={handleDeleteAction}
        />
      </div>
    </div>
  );
};

/**
 * List of actions to perform on movie Item
 * @param {object} param0
 * deleteHandler callback function for delete action
 * visibility show only if actions are available
 */
const Actions = ({ deleteHandler, visibility }) => {
  if (visibility) {
    return (
      <div className={styles.actions}>
        <DeleteAction deleteHandler={deleteHandler} />
      </div>
    );
  } else return <></>;
};

/**
 * Delete Action Component
 * @param {object} param0
 * deleteHandler callback function for delete action
 */
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
