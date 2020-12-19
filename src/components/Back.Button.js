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

  span {
    font-size: 1.15rem;
    padding-right: 10px;
    color: #616161;
  }

  &:hover {
    color: #000;
    text-shadow: 1px 2px 8px 6px rgba(0, 0, 0, 0.5);

    span {
      text-shadow: 1px 2px 8px 6px rgba(0, 0, 0, 0.5);
    }
  }
`;

export default BackButton;
