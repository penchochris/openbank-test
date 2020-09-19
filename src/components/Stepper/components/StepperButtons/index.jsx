import React from 'react';
import ButtonCustom from 'components/Forms/Buttons/ButtonCustom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './StepperButtons.scss';

const StepperButtons = ({
  activeStep,
  submitStep,
  backText,
  nextText,
  handleBack,
  handleNext,
  elementsLength,
  handleSubmitNext
}) => {
  return (
    <div className={`stepper-buttons stepper-buttons__${activeStep === 0 ? 'end' : 'space-between'}`} >
      {activeStep > 0 && (
        <ButtonCustom
          color="secondary"
          background="white"
          text={backText}
          handleOnClick={handleBack}
        />
      )}
      {activeStep < elementsLength - 1 && (
        <ButtonCustom
          color="white"
          background="secondary"
          text={nextText}
          iconComponent={<ArrowForwardIosIcon fontSize="inherit" />}
          handleOnClick={
            activeStep === submitStep ? handleSubmitNext : handleNext
          }
        />
      )}
    </div>
  );
};

export default StepperButtons;
