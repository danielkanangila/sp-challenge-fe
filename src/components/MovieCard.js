import React, { useState } from "react";
import styles from "./../styles/movie-card.module.scss";

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

const CardContent = ({ Poster, Title, Type, Year, isSubCard, onClick }) => {
  const getFormattedTitle = () => {
    return Title.length > 25 && !isSubCard
      ? `${Title.substring(0, 25)}...`
      : Title;
  };

  return (
    <>
      <div className={styles.img_wrapper}>
        <img src={Poster} alt={Title} />
      </div>
      <div className={styles.card_details}>
        <div className={styles.card_details_txt_wrapper}>
          <h4>{getFormattedTitle()}</h4>
          <span>
            {Year} {Type}
          </span>
        </div>
        <button className="btn btn-default btn-small">Nominate</button>
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
