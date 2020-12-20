import React from "react";
import styled from "styled-components";

const MovieNotFound = ({ visibility }) => {
  if (visibility) return <NotFound>Oups! 😟 Movie Not found</NotFound>;
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
