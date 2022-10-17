import React, { useEffect, useState } from "react";
import logo from "./logo.png";
// import { useSelector, useDispatch } from "react-redux";
// import { logOutFirebase } from "../../../store/actions/auth";
import Image from "next/image";
import Link from "next/link";
// import styles from "./Nav.module.scss";

const goToHome = () => {
  window.location.href = "/";
};

// const showMenu = () => {
//   let navMenu = document.getElementById("navMenu");
//   navMenu.classList.toggle("show");
// };

const Nav = () => {
  //   const dispatch = useDispatch();
  //   const currentUser = useSelector((state) => state.auth);
  //   const [currentLink, setCurrentLink] = useState("/login");
  //   const userLogout = () => {
  //     dispatch(logOutFirebase());
  //   };

  //   useEffect(() => {
  //     if (currentUser?.displayName) {
  //       setCurrentLink("/admin");
  //     }
  //   }, [currentUser]);

  return (
    <nav className='nav'>
      <div className="container">
        <div className='nav__content'>
          <div className='nav__top'>
            <div className='nav__logo' id="burger">
              <div className="nav__image">
              <Image
                src={logo}
                alt=""
                onClick={goToHome}
                className='nav__image'
              />
              </div>
              <span>Coding Latam</span>
            </div>
            <div className='nav__links'>
              <ul>
                <li>
                  <Link href="/clases">Clases</Link>
                </li>
                <li>
                  <Link href="/grupos">Grupos de estudio</Link>
                </li>
                <li>
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
                <li>
                  {/* <Link href="/"> */}
                  {/* <Image
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                    /> */}

                  {/* {currentUser?.displayName
                      ? currentUser.displayName
                      : "Iniciar sesión"} */}
                  {/* </Link> */}
                </li>
                {/* {currentUser?.displayName ? (
                  <li className="btn yellow logout" onClick={userLogout}>
                    Salir
                  </li>
                ) : (
                  false
                )} */}
              </ul>
            </div>
            <div className='nav__button'>
              {/* <button className="btn yellow scrollable" onClick={showMenu}>
                Menú
              </button> */}
            </div>
          </div>
          <div className='nav__bottom'>
            <ul className="nav__menu fadeIn" id="navMenu">
              {/* <button id="navClose" onClick={showMenu}>
                X
              </button> */}

              <li>
                <Link href="/clases">Clases</Link>
              </li>
              <li>
                <Link href="/grupos">Grupos de estudio</Link>
              </li>
              <li>
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
              </li>
              <li>
                {/* <Link href="/"> */}
                {/* <Image
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                  /> */}

                {/* {currentUser?.displayName
                    ? currentUser.displayName
                    : "Iniciar sesión"} */}
                {/* </Link> */}
              </li>
              {/* {currentUser?.displayName ? (
                <li onClick={userLogout}>Salir</li>
              ) : (
                false
              )} */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
