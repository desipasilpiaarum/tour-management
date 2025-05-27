import React, { useRef, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logokita.png";
import "./header.css";

const nav__links = [
  { path: "/home", display: "Beranda" },
  { path: "/Tentangkami", display: "Tentang kami" },
  { path: "/tours", display: "Wisata Kita" },
];

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to="/login">
                <img src={logo} alt="Logo" className="logo__img" />
              </Link>
            </div>

            {/* Hamburger button */}
            <div className="mobile__menu d-md-none" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </div>

            {/* Navigation menu */}
            <div className={`navigation ${isMenuOpen ? "show__menu" : ""}`}>
              <ul className="menu d-flex align-items-center gap-5 flex-md-row flex-column">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
