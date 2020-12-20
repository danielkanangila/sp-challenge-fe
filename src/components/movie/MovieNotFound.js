import React from "react";
import styled from "styled-components";
import styles from "./../../styles/movie.module.scss";

const MovieNotFound = ({ visibility }) => {
  if (visibility)
    return (
      <div className={styles.main_content}>
        <NotFound>Oups! 😟 Movie Not found</NotFound>
      </div>
    );
  else return <></>;
};

const NotFound = styled.h1`
  font-weight: bold;
  font-size: 1.7rem;
  padding: 50px 0 100px;
  text-align: center;
  width: 100%;
  color: #757575;
`;

export default MovieNotFound;
