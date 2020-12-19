import React from "react";
import { motion } from "framer-motion";
import styles from "./../styles/movie-card.module.scss";
import Image from "./Image";
import MouseHover from "./MouseHover";

const MovieCard = (props) => {
  return (
    <MouseHover className={styles.movie_card}>
      {(hover) => (
        <>
          <DefaultCard {...props} visibility={hover} />
          {/* Only visible if mouse is hover the card */}
          <SubCard {...props} visibility={hover} />
        </>
      )}
    </MouseHover>
  );
};

/**
 *
 * @param {object} param0
 * movie object as come from api result
 * isSubCard: used to render full movie title on hover
 * onNominate:  Nominate button onclick handler: call the dispatch function
 * nominated: boolean value if movie is already nominated
 */
const CardContent = ({
  Poster,
  Title,
  Type,
  Year,
  onNominate,
  nominated,
  isSubCard,
}) => {
  /** Substring to 25 character to fit in default card */
  const getFormattedTitle = () => {
    return Title.length > 25 && !isSubCard
      ? `${Title.substring(0, 25)}...`
      : Title;
  };

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
        <button
          onClick={onNominate}
          className={`btn btn-default btn-small ${
            nominated ? "btn-disabled" : ""
          }`}
          disabled={nominated}
        >
          Nominate
        </button>
      </div>
    </>
  );
};

/**
 * Default card rendered
 */
const DefaultCard = ({ visibility, ...rest }) => {
  if (visibility) {
    return (
      <motion.div
        animate={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.default_card}`}
      >
        <CardContent {...rest} />
      </motion.div>
    );
  } else
    return (
      <div className={`${styles.default_card}`}>
        <CardContent {...rest} />
      </div>
    );
};

/**
 * This component his hidden by default and visible on mouse hover on main card
 * Allow user to see movie details if any
 * visibility: only visible on card hover
 * rest: movie object
 */
const SubCard = ({ visibility, ...rest }) => {
  if (visibility) {
    return (
      <motion.div
        animate={{ width: 150 }}
        transition={{ duration: 0.5 }}
        className={`${styles.sub_card}`}
      >
        <CardContent {...rest} isSubCard />
      </motion.div>
    );
  } else return <></>;
};

export default MovieCard;
