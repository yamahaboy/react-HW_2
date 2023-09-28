import styled from "styled-components";

export const PresentationPage = styled.div``;

export const ComponentName = styled.p`
  font-size: 36px;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

export const GridInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: 300px;
  margin-left: 100px;
`;
