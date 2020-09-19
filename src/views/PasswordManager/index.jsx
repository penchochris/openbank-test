import React, { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { onSubmitSaga } from '../../actions/PasswordManagerActions';
import { setStep } from 'actions/PasswordManagerActions';

import ProductInformation from './components/ProductInformation';
import Feedback from './components/Feedback';
import Form from './components/PasswordForm';
import Stepper from 'components/Stepper';
import StepperButtons from '../../components/Stepper/components/StepperButtons';

import { submitForm } from 'services/api';
import { useTranslation } from 'react-i18next';

import './PasswordManager.scss';

const PasswordManager = () => {
  const dispatch = useDispatch();
  const { step } = useSelector(state => state.form);
  
  const { t } = useTranslation(['stepper']);

  const handleNext = () => {
    dispatch(setStep(step + 1));
  };

  const handleCancel = () => {
    dispatch(setStep(0));
  };

  const formRef = useRef();

  // Here we should make a real API call with the form info.
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
        title={t('stepper.title')}
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
