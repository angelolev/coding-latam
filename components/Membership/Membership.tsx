import React from "react";
export interface MembershipInterface {}

const Membership: React.FC<MembershipInterface> = () => {
  return (
    <div className="membership">
      <div className="membership__description">
        <h3>¿Te pareció interesante?</h3>
        {/* <p>
			  Obtén seguimiento personal y mentoría 1 a 1 con nuestros intructores.
			</p>
			<p>
			  Tenemos múltiples opciones para encontrar la mejor versión de ti y
			  mejorar tus habilidades!
			</p> */}
        <p>
          Puedes apoyar a la comunidad a seguir creando contenido de calidad y/o
          unirte a alguna de nuestras múltiples opciones para encontrar la mejor
          versión de ti y mejorar tus habilidades con nosotros.
        </p>
      </div>
      <div className="membership__list">
        <div className="membership__item">
          <i className="icon icon-patreon"></i>{" "}
          <a
            target="_blank"
            href="https://www.patreon.com/codinglatam"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
        </div>
        <div className="membership__item">
          <i className="icon icon-buymeacoffee"></i>{" "}
          <a
            target="_blank"
            href="https://www.buymeacoffee.com/codinglatam"
            rel="noopener noreferrer"
          >
            Buymeacoffee
          </a>
        </div>
      </div>
    </div>
  );
};

export default Membership;
