import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductInformation from './components/ProductInformation';
import Feedback from './components/Feedback';
import Form from './components/PasswordForm';
import Stepper from 'components/Stepper';
import { setStep } from 'actions/PasswordManagerActions';
import { onSubmitSaga } from '../../actions/PasswordManagerActions';

import { submitForm } from 'services/api';

import './PasswordManager.scss';
import StepperButtons from '../../components/Stepper/components/StepperButtons';

const PasswordManager = () => {
  const dispatch = useDispatch();
  const { step } = useSelector(state => state.form);

  const handleNext = () => {
    dispatch(setStep(step + 1));
  };

  const handleCancel = () => {
    dispatch(setStep(0));
  };

  const formRef = useRef();

  const handleSubmit = form =>
    submitForm('OK')
      .then(data => {
        const { status } = data;
        dispatch(onSubmitSaga({ status, step }));
      })
      .catch(e => {
        const { status } = e;
        dispatch(onSubmitSaga({ status, step }));
      });

  const handleSubmitNext = () =>
    formRef.current && formRef.current.handleSubmit();

  const handleChange = valueName => e =>
    formRef.current && formRef.current.setFieldValue(valueName, e.target.value);

  return (
    <div className="password-manager">
      <Stepper
        title="Crea tu Password Manager"
        activeStep={step}
      >
        <ProductInformation />
        <Form
          formRef={formRef}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Feedback />
      </Stepper>
      <StepperButtons
        activeStep={step}
        handleCancel={handleCancel}
        handleNext={handleNext}
        handleSubmit={handleSubmitNext}
      />
    </div>
  );
};

export default PasswordManager;
