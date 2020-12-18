import React, { useContext, useState } from "react";
import { setNominations } from "../context/actions";
import { SearchContext } from "../context/search-context";
import styles from "./../styles/movie-card.module.scss";
import Image from "./Image";

const MovieCard = ({ onClick, ...rest }) => {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const handleHover = (status) => setIsMouseHover(status);

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={styles.movie_card}
    >
      <CardContent {...rest} />
      <SubCard {...rest} visibility={isMouseHover} />
    </div>
  );
};

const CardContent = ({ imdbID, Poster, Title, Type, Year, isSubCard }) => {
  const getFormattedTitle = () => {
    return Title.length > 25 && !isSubCard
      ? `${Title.substring(0, 25)}...`
      : Title;
  };

  const [_, dispatch] = useContext(SearchContext);

  const onNominate = () =>
    dispatch(setNominations({ imdbID, Poster, Title, Type, Year, isSubCard }));

  return (
    <>
      <div className={styles.img_wrapper}>
        <Image source={Poster === "N/A" ? undefined : Poster} alt={Title} />
      </div>
      <div className={styles.card_details}>
        <div className={styles.card_details_txt_wrapper}>
          <h4>{getFormattedTitle()}</h4>
          <span>
            {Year} {Type}
          </span>
        </div>
        <button onClick={onNominate} className="btn btn-default btn-small">
          Nominate
        </button>
      </div>
    </>
  );
};

const SubCard = ({ visibility, ...rest }) => {
  if (visibility) {
    return (
      <div className={`${styles.sub_card}`}>
        <CardContent {...rest} isSubCard />
      </div>
    );
  } else return <></>;
};

export default MovieCard;
