import React from 'react';
import Group from 'assets/img/group.svg';
import Group3 from 'assets/img/group-3.svg';

import './ProductInformation.scss';

export default function ProductInformation() {
  return (
    <div className="product-information">
      <div className="product-information__top-wrapper">
        <div className="product-information__info">
          <img src={Group} alt="svg" />
          <p className="product-information__info-text">
            Guarda aquí todas tus contraseñas, datos o cualquier información,
            olvida las notas de papel y las aplicaciones no protegidas.
          </p>
        </div>
        <div className="product-information__info">
          <img src={Group3} alt="svg" />
          <p className="product-information__info-text">
            Crea tu clave maestra: solo tú podrás acceder a tus secretos con
            ella.
          </p>
        </div>
      </div>
      <div className="product-information__bottom-wrapper">
        <h3>Cómo funciona</h3>
        <p>
          En primer lugar, debes crear una contraseña diferente para sus
          pertenencias electronicas. No podras recuperar tu contraseña, asi que
          recuerdala bien.
        </p>
        <h3>Qué datos puedes guardar</h3>
        <p>
          Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
          móvil, el número de serie de alguno de tus dispositivos o cualquier
          información que necesites tener en lugar seguro.
        </p>
      </div>
    </div>
  );
}
