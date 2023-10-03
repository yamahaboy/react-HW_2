import styled from "styled-components";

export const CenterSnackbars = styled.div`
  display: flex;
  justify-content: center;
`;

export const GridSnackbars = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;
