import styled, { css } from "styled-components";

export const DrawerStyle = styled.div`
  ${({ styles }) => {
    const { width } = styles;
    return css`
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 11;
      top: 0;
      right: 0;
      overflow-x: hidden;
      transition: 0.25s ease-in-out;
      width: ${width}px;
      background: #fff;
      box-shadow: -5px 0px 10px -4px rgba(0, 0, 0, 0.29);
      .drawer-content {
        padding: 15px;
      }
      .drawer-title {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background: #f3f3f3;
        span {
          font-size: 20px;
          font-weight: 600;
        }
        .close-drawer {
          font-size: 16px;
          transition: 0.1s;
          :hover {
            cursor: pointer;
            opacity: 0.5;
          }
        }
      }
    `;
  }}
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.25;
  transition: 0.25s;
`;
