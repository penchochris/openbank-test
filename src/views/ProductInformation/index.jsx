import React from "react";
import Group from "../../assets/img/group.svg";
import Group3 from "../../assets/img/group-3.svg";

import "./ProductInformation.scss"

export default function ProductInformation() {
  return (
    <div className="product-information">
      <div className="product-information__top-wrapper">
        <div className="product-information__info">
          <img src={Group} alt="svg"/>
          <p className="product-information__info-text">
            Guarda aqui todas tus contrasenas, datos o cualquier informacion,
            olvida las notas de papel y las aplicaciones no protegidas.
          </p>
        </div>
        <div className="product-information__info">
          <img src={Group3} alt="svg"/>
          <p className="product-information__info-text">
            Crea tu clave maestra: solo tu podras acceer a tus secretos con
            ella.
          </p>
        </div>
      </div>
      <div className="product-information__bottom-wrapper">
        <h3>Como funciona</h3>
        <p>
          En primer lugar, debes crear una contrasena diferente para sus
          pertenencias electronicas. No podras recuperar tu contrasena, asi que
          recuerdala bien.
        </p>
        <h3>Que datos puedes guardar</h3>
        <p>
          Por ejemplo, el numero de tu tarjeta, el PIN y el PUK de tu telefono
          movil, el numero de serie de alguno de tus dispositivos o cualquier
          informacipn que necesites tener en lugar seguro.
        </p>
      </div>
    </div>
  );
}
