import styled, { css } from "styled-components";
import { IButton } from "./Button";
export const ChildrenText = styled.div`
  font-size: 26px;
  color: #000;
  margin-bottom: 10px;
`;
export const ButtonStyled = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border: none;
  color: #ffff;
  background-color: #116acc;
  border-radius: 10px;
  ${(className) => getButtonStyles(className.className)}
`;

const getButtonStyles = (className: string) => {
  switch (className) {
    case "primary":
      return css`
        width: 152px;
        height: 52px;
      `;
    case "secondary":
      return css`
        width: 152px;
        height: 52px;
        background-color: #fd4e5d;
      `;
    case "small":
      return css`
        width: 136px;
        height: 48px;
      `;
    case "normal":
      return css`
        width: 152px;
        height: 52px;
      `;
    case "medium":
      return css`
        width: 179px;
        height: 58px;
      `;
    case "normal-rest":
      return css`
        width: 100px;
        height: 52px;
      `;
    case "normal-hover":
      return css`
        width: 100px;
        height: 52px;
        background-color: rgba(17, 106, 204, 0.7);
      `;
    case "normal-pressed":
      return css`
        width: 100px;
        height: 52px;
        background-color: #072f54;
      `;
    case "normal-disable":
      return css`
        width: 100px;
        height: 52px;
        background-color: #9ca3af;
      `;
    case "icon-rest":
      return css`
        width: 134px;
        height: 52px;
      `;
    case "icon-hover":
      return css`
        width: 134px;
        height: 52px;
        background-color: rgba(17, 106, 204, 0.7);
      `;
    case "icon-pressed":
      return css`
        width: 134px;
        height: 52px;
        background-color: #072f54;
      `;
    case "icon-disable":
      return css`
        width: 134px;
        height: 52px;
        background-color: #9ca3af;
      `;
    case "outline-rest":
      return css`
        width: 100px;
        height: 52px;
        background-color: #fff;
        border: 1px solid #116acc;
        color: #116acc;
      `;
    case "outline-hover":
      return css`
        width: 100px;
        height: 52px;
        background-color: #70a6e0;
        border: 1px solid #116acc;
        color: #116acc;
      `;
    case "outline-pressed":
      return css`
        width: 100px;
        height: 52px;
        background-color: #b8d2f0;
        border: 1px solid #116acc;
        color: #116acc;
      `;
    case "outline-disable":
      return css`
        width: 100px;
        height: 52px;
        background-color: #fff;
        border: 1px solid #9ca3af;
        color: #9ca3af;
      `;
  }
};
