import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface NavInterface {}

const Nav: React.FC<NavInterface> = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const goToHome = () => {
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__content">
          <div className="nav__top">
            <div className="nav__logo" id="burger">
              <div className="nav__image">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={50}
                  height={50}
                  onClick={goToHome}
                  className="nav__image"
                />
              </div>
              <span>Coding Latam</span>
            </div>
            <div className="nav__links">
              <ul>
                <li>
                  <Link href="/clases">Clases</Link>
                </li>
                <li>
                  <Link href="/grupos">Grupos de estudio</Link>
                </li>
                {/* <li>
                  <Link href="/mentor">Mentoría</Link>
                </li>
                <li>
                  <Link href="/calendario">Calendario</Link>
                </li>
                <li>
                  <a
                    href="https://dailybreakpoint.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li> */}
                {/* <Link href="/"> */}
                {/* <Image
						  src={currentUser.photoURL}
						  alt={currentUser.displayName}
						/> */}

                {/* {currentUser?.displayName
						  ? currentUser.displayName
						  : "Iniciar sesión"} */}
                {/* </Link> */}
                {/* </li> */}
                {/* {currentUser?.displayName ? (
					  <li className="btn yellow logout" onClick={userLogout}>
						Salir
					  </li>
					) : (
					  false
					)} */}
              </ul>
            </div>
            <div className="nav__button">
              <button className="btn yellow scrollable" onClick={toggleMenu}>
                Menú
              </button>
            </div>
          </div>
          <div className="nav__bottom">
            {isMenuVisible && (
              <ul className="nav__menu fadeIn" id="navMenu">
                <button id="navClose" onClick={toggleMenu}>
                  X
                </button>

                <li>
                  <Link href="/clases">Clases</Link>
                </li>
                <li>
                  <Link href="/grupos">Grupos de estudio</Link>
                </li>
                {/* <li>
                <Link href="/mentoria">Mentoría</Link>
              </li>
              <li>
                <Link href="/calendario">Calendario</Link>
              </li>
              <li>
                <a
                  href="https://dailybreakpoint.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li> */}
                <li>
                  <Link href="/">
                    <Image
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                    />

                    {currentUser?.displayName
                      ? currentUser.displayName
                      : "Iniciar sesión"}
                  </Link>
                </li>
                {currentUser?.displayName ? (
                  <li onClick={userLogout}>Salir</li>
                ) : (
                  false
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
