import styled, { css } from "styled-components";
import { IProps } from "./InputText";

export const ChildrenText = styled.div`
  font-size: 26px;
  color: #000;
`;
export const InputStyled = styled.input<IProps>`
  width: 300px;
  height: 44px;
  border-radius: 5px;
  font-size: 16px;

  ${(type) => getInputStyles(type.type)}
`;

const getInputStyles = (type: string) => {
  switch (type) {
    case "default":
      return css`
        border: 1px solid #9ca3af;
        color: #000;
      `;

    case "disable":
      return css`
        border: 0.5px solid #9ca3af;
        color: #9ca3af;
      `;
    case "focused":
      return css`
        /* border: 1px solid #9ca3af;
        color: #9ca3af;
        &:focus {
          border: 1px solid #116acc;
          background-color: #a0c3ff1a;
          color: #000;
        } */
        border: 1px solid #116acc;
        background-color: #a0c3ff1a;
        color: #000;
      `;
    case "hover":
      return css`
        /* border: 1px solid #9ca3af;
        color: #9ca3af;
        &:hover {
          border: 1px solid #116acc;
          background-color: #a0c3ff1a;
          color: #000;
        } */
        border: 1px solid #116acc;
        background-color: #a0c3ff1a;
        color: #000;
      `;
    case "filled":
      return css`
        border: 1px solid #9ca3af;
        color: black;
      `;
    case "typing":
      return css`
        border: 1px solid #116acc;
        background-color: #a0c3ff1a;
        color: #000;
      `;
    case "error":
      return css`
        border: 1px solid #ba0000;
        color: #9ca3af;
      `;
    case "success":
      return css`
        border: 1px solid #76ca66;
        color: #9ca3af;
      `;
  }
};
