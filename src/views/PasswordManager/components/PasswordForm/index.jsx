import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputPassword from 'components/InputPassword';
import * as yup from 'yup';

import './PasswordForm.scss';

const PasswordForm = ({ formRef, handleSubmit, handleChange }) => (
  <div className="password-form">
    <p>
      En primer lugar, debes crear una contraseña diferente para sus
      pertenencias electronicas. No podras recuperar tu contraseña, asi que
      recuerdela bien.
    </p>
    <Formik
      innerRef={formRef}
      validationSchema={yup.object({
        password: yup
          .string()
          .required('Requerido')
          .min(8, 'Minimo 8 caracteres')
          .max(24, 'Maximo 24 caracteres')
          .matches(
            `(?=.*[A-Z])(?=.*[0-9])`,
            'Requiere un numero y una mayuscula'
          ),
        repeatPassword: yup
          .string()
          .required('Requerido')
          .oneOf([yup.ref('password')], 'Las contraseñas no son iguales'),
        hint: yup.string().max(255, 'Maximo 255 caracteres'),
      })}
      initialValues={{
        password: '',
        repeatPassword: '',
        hint: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className="password-form__container">
        <div className="password-form__wrapper">
          <div className="password-form__password">
            <label>Crea tu Contraseña Maestra</label>
            <InputPassword handleChange={handleChange('password')} />
            <div className="password-form__error">
              <ErrorMessage name="password" />
            </div>
          </div>
          <div className="password-form__password">
            <label>Repite tu Contraseña Maestra</label>
            <InputPassword handleChange={handleChange('repeatPassword')} />
            <div className="password-form__error">
              <ErrorMessage name="repeatPassword" />
            </div>
          </div>
        </div>
        <div>
          Tambien puedes crear una pista que te ayude a recordar tu contraseña
          maestra.
        </div>
        <div className="password-form__hint">
          <label>Crea tu pista para recordar tu contraseña (opcional)</label>
          <Field type="text" name="hint" className="password-form__input" />
          <div className="password-form__error">
            <ErrorMessage name="hint" />
          </div>
        </div>
      </Form>
    </Formik>
  </div>
);

export default PasswordForm;
