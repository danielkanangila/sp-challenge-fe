import * as React from "react";
import styled from "styled-components";

export const CloseButton = ({ close, className }) => (
  <Button onClick={close} className={`close ${className}`}>
    <span className="material-icons">cancel</span>
  </Button>
);

const Button = styled.button`
  span {
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3 ease;

    &:hover {
      color: #fff;
    }
  }
`;
