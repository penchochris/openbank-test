import React from 'react';
import { useSelector } from 'react-redux';
import { CheckCircleOutlined, ErrorOutlineOutlined } from '@material-ui/icons';

export default function Feedback() {
  const { status } = useSelector(state => state.form);

  return (
    <div>
      <div>
        {status === 200 ? <CheckCircleOutlined /> : <ErrorOutlineOutlined />}
      </div>
      {status === 200 ? (
        <>
          <h2>¡Tu Password Manager ya está creado!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </>
      ) : (
        <>
          <h2>Ha habido un error</h2>
          <p>
            No hemos podido modificar tu Contraseña Maestra, inténtalo más
            tarde.
          </p>
        </>
      )}
    </div>
  );
}
