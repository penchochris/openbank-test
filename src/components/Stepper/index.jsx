import React from 'react';

import { default as StepperMui } from '@material-ui/core/Stepper';
import { default as StepMui } from '@material-ui/core/Step';
import { default as StepLabelMui } from '@material-ui/core/StepLabel';

const Stepper = ({
  children,
  title,
  activeStep,
}) => {
  const childrenArray = React.Children.toArray(children);

  const currentChild = childrenArray[activeStep];
  const steps = [];

  for (let i = 0; i < childrenArray.length; i++) {
    steps.push(
      <StepMui key={i} completed={activeStep > i}>
        <StepLabelMui />
      </StepMui>
    );
  }

  return (
    <div className="stepper">
      <StepperMui alternativeLabel activeStep={activeStep}>
        {steps}
      </StepperMui>
      <h1>{title}</h1>
      {currentChild}
    </div>
  );
};

export default Stepper;
