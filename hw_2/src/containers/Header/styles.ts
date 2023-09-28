import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  font-size: 22px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

export const NavLinkCustom = styled(NavLink)`
  &.active {
    font-weight: 600;
    color: #e200ff;
  }
`;
