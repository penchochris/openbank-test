import React, { useState } from "react";

import { default as StepperMui } from "@material-ui/core/Stepper";
import { default as StepMui } from "@material-ui/core/Step";
import { default as StepLabelMui } from "@material-ui/core/StepLabel";
import { default as ButtonMui } from "@material-ui/core/Button";

export default function Stepper2(props) {
  const childrenArray = React.Children.toArray(props.children);
  const [step, setStep] = useState(1);
  const currentChild = childrenArray[step];
  const steps = [];

  for (let i = 0; i < childrenArray.length; i++) {
    steps.push(
      <StepMui key={i} completed={step > i}>
        <StepLabelMui />
      </StepMui>
    );
  }

  return (
    <div>
      <h1>{props.title && props.title}</h1>
      <StepperMui alternativeLabel activeStep={step}>
        {steps}
      </StepperMui>
      {currentChild}
      <div>
        <ButtonMui onClick={() => setStep((s) => s + 1)}>Next</ButtonMui>
        <ButtonMui onClick={() => setStep((s) => s - 1)}>Back</ButtonMui>
      </div>
    </div>
  );
}
