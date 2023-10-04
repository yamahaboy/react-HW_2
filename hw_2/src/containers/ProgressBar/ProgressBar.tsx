import React from "react";
import { Stepper } from "../../components/Stepper/Stepper";

export const Bar: React.FC = () => {
  return (
    <div>
      <div>
        <Stepper activeStep={0} />
      </div>
      <div>
        <Stepper activeStep={1} />
      </div>
      <div>
        <Stepper activeStep={2} />
      </div>
    </div>
  );
};
