import React from "react";
import styled from "styled-components";

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;

const Step = styled.div<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border: 2px solid ${(props) => (props.active ? "#007bff" : "#ccc")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
`;

const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: #007bff;
`;

interface StepperProps {
  activeStep: number;
  type?: "step1" | "step2" | "step3" | "step4";
}

export const Stepper: React.FC<StepperProps> = ({ activeStep }) => {
  return (
    <StepperContainer>
      <Step active={activeStep === 0}>1</Step>
      <Line />
      <Step active={activeStep === 1}>2</Step>
      <Line />
      <Step active={activeStep === 2}>3</Step>
    </StepperContainer>
  );
};
