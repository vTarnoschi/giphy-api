import styled, { css } from "styled-components";

const GifsStyle = styled.div`
  ${({ styles }) => {
    const { heigth } = styles;

    return css`
      width: 100%;
      display: inline-block;
      padding: 1em;
      margin-bottom: 1em;
      heigth: ${heigth}px;
    `;
  }}
`;

export default GifsStyle;
