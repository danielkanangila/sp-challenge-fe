import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BackButton = ({ props }) => {
  const history = useHistory(); // browser history hook handler

  return (
    <Button onClick={() => history.goBack()} {...props}>
      <span className="material-icons">keyboard_backspace</span>
      Back to result
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #616161;
  width: fit-content;
  transition: 0.3s;
  padding: 6px 15px;
  background-color: #dddddd;
  border-radius: 5px;

  span {
    font-size: 1.15rem;
    padding-right: 10px;
    color: #616161;
  }

  &:hover {
    background-color: #bdbdbd;
    color: #000;

    span {
      color: #000;
    }
  }
`;

export default BackButton;
