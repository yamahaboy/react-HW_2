import styled, { css } from "styled-components";

import { IMessage } from "./Message";
import { CrossIcon } from "../../images";

export const StyledMessage = styled.div<IMessage>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  width: 440px;
  height: 48px;
  border-radius: 7px;
  font-size: 16px;
  ${(type) => getMessageStyles(type.type)}
`;

const getMessageStyles = (type: string) => {
  switch (type) {
    case "warning":
      return css`
        color: #fbc756;
        border: 1px solid #fbc756;
        background-color: #f7eacd;
      `;

    case "success":
      return css`
        color: #76ca66;
        border: 1px solid #76ca66;
        background-color: #d6f7d0;
      `;
    case "error":
      return css`
        color: #ba0000;
        border: 1px solid #ba0000;
        background-color: #fac5c5;
      `;
    case "information":
      return css`
        color: #116acc;
        border: 1px solid #116acc;
        background-color: #a4cbf5;
      `;
  }
};

export const StyledIcon = styled(CrossIcon)<{ color: string }>`
  width: 24px;
  height: 24px;

  path {
    fill: ${(props) => getIconColor(props.color)};
  }
`;
const getIconColor = (color: string) => {
  switch (color) {
    case "warning":
      return "#fbc756";
    case "success":
      return "#76ca66";
    case "error":
      return "#ba0000";
    case "information":
      return "#116acc";
  }
};
