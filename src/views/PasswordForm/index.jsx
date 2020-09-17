import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import InputPassword from "../../components/InputPassword";
import { object } from "yup";
import "./PasswordForm.scss";

export default function PasswordForm() {

  const formikRef = useRef();

  const handleSubmit = (form) => {
    console.log("Este es el form");
    console.log(form);
  };

  const handleChange = valueName => e => {
    formikRef.current && formikRef.current.setFieldValue(
      valueName,
      e.target.value
    );
  }

  return (
    <div className="password-form">
      <p>
        En primer lugar, debes crear una contrasena diferente para sus
        pertenencias electronicas. No podras recuperar tu contrasena, asi que
        recuerdela bien.
      </p>
      <Formik
        innerRef={formikRef}
        validationSchema={object({})}
        initialValues={{
          password: "",
          repeatPassword: "",
          hint: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="password-form__container">
          <div className="password-form__wrapper">
            <div className="password-form__password">
              <label>Crea tu Contrasena Maestra</label>
              <InputPassword handleChange={handleChange("password")}/>
            </div>
            <div className="password-form__password">
              <label>Repite tu Contrasena Maestra</label>
              <InputPassword handleChange={handleChange("repeatPassword")}/>
            </div>
          </div>
          <div>
            Tambien puedes crear una pista que te ayude a recordar tu contrasena
            maestra.
          </div>
          <div className="password-form__hint">
            <label>Crea tu pista para recordar tu contrasena (opcion)</label>
            <Field type="text" name="hint" className="password-form__input" type="text" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
