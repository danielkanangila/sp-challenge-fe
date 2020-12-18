import styled from "styled-components";

const css = String.raw;

export const Divider = styled.div`
  display: block;
  content: "";
  border-top: 1px solid #dfe1e5;
  margin: 0 auto;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
`;
