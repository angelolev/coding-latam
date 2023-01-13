import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

export interface NavInterface {}

const Nav: React.FC<NavInterface> = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [currentLink, setCurrentLink] = useState<string>("/login");
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const goToHome = () => {
    router.push("/");
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    if (user) {
      setCurrentLink("/profile");
    } else {
      setCurrentLink("/login");
    }
  }, [user, router]);

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
                  onClick={() => goToHome}
                  className="nav__image"
                />
              </div>
              <span>Coding Latam</span>
            </div>
            <div className="nav__links">
              <ul>
                <li>
                  <Link href="/clases">
                    <a>Clases</a>
                  </Link>
                </li>
                <li>
                  <Link href="/grupos">
                    <a>Grupos de estudio</a>
                  </Link>
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
                </li> */}
                <li>
                  <Link href={currentLink}>
                    <a>
                      {user?.photoURL && (
                        <div className="nav__profile-photo">
                          <Image
                            src={user.photoURL}
                            alt={user.displayName}
                            width={50}
                            height={50}
                          />
                        </div>
                      )}

                      {user?.displayName ? user.displayName : "Iniciar sesión"}
                    </a>
                  </Link>
                </li>
                {user?.displayName ? (
                  <li
                    className="btn yellow logout"
                    onClick={() => auth.signOut()}
                  >
                    Salir
                  </li>
                ) : (
                  false
                )}
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
                  <Link href={currentLink}>
                    <a>
                      {user?.photoURL && (
                        <div className="nav__profile-photo">
                          <Image
                            src={user.photoURL}
                            alt={user.displayName}
                            width={50}
                            height={50}
                          />
                        </div>
                      )}

                      {user?.displayName ? user.displayName : "Iniciar sesión"}
                    </a>
                  </Link>
                </li>
                {user?.displayName ? (
                  <li onClick={() => auth.signOut()}>Salir</li>
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
