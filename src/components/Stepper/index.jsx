import React from 'react';

import { default as StepperMui } from '@material-ui/core/Stepper';
import { default as StepMui } from '@material-ui/core/Step';
import { default as StepLabelMui } from '@material-ui/core/StepLabel';

import StepperConnector from './components/StepperConnector';
import StepperIcon from './components/StepperIcon';

const Stepper = ({ children, title, activeStep }) => {
  const childrenArray = React.Children.toArray(children);

  const currentChild = childrenArray[activeStep];
  const steps = [];

  for (let i = 0; i < childrenArray.length; i++) {
    steps.push(
      <StepMui key={i} completed={activeStep > i}>
        <StepLabelMui StepIconComponent={StepperIcon} />
      </StepMui>
    );
  }

  return (
    <div className="stepper">
      <div className="stepper__stepper">
        <StepperMui
          alternativeLabel
          activeStep={activeStep}
          connector={<StepperConnector />}
        >
          {steps}
        </StepperMui>
      </div>
      <div className="stepper__content">
        <h1>{title}</h1>
        {currentChild}
      </div>
    </div>
  );
};

export default Stepper;
