import React from 'react';
import { useSelector } from 'react-redux';
import ButtonCustom from 'components/Forms/Buttons/ButtonCustom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './StepperButtons.scss';

const StepperButtons = ({
  activeStep,
  handleCancel,
  handleNext,
  handleSubmit,
}) => {
  const { step, status } = useSelector(state => state.form);
  const elementsLength = 3;
  const isLastStep = activeStep === elementsLength - 1;

  const acceptActions = {
    0: handleNext,
    1: handleSubmit,
    2: handleCancel,
  };

  return (
    <div
      className={`stepper-buttons stepper-buttons__${
        isLastStep ? 'end' : 'space-between'
      }`}
    >
      {!isLastStep && (
        <ButtonCustom
          color="secondary"
          background="white"
          text="Cancelar"
          handleOnClick={handleCancel}
        />
      )}
      <ButtonCustom
        color={!isLastStep ? 'white' : 'primary'}
        background={!isLastStep ? 'secondary' : 'white'}
        text={
          !isLastStep
            ? 'Siguiente'
            : status === 200
            ? 'Acceder'
            : 'Volver a Password Manager'
        }
        iconComponent={<ArrowForwardIosIcon fontSize="inherit" />}
        handleOnClick={acceptActions[step]}
      />
    </div>
  );
};

export default StepperButtons;
