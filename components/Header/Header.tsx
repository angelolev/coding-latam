import React from "react";
import Image from "next/image";
import headerImage from "./terminal.png";

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__text">
          <h1>
            <span>Mejora tus dev skills</span>
          </h1>
          <p>Aprende y comparte conocimiento con otros devs de la industria</p>
        </div>
        <div className="header__logos">
          <Image src={headerImage} alt="Terminal" />
        </div>
      </div>
    </header>
  );
};

export default Header;
