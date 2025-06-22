import React, { useRef, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cek status login setiap render Header
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setIsLoggedIn(true);
          setUserRole(data.user.role);
        } else {
          setIsLoggedIn(false);
          setUserRole(null);
        }
      } catch {
        setIsLoggedIn(false);
        setUserRole(null);
      }
    };
    checkAuth();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsLoggedIn(false);
    setUserRole(null);
    navigate("/login");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to={isLoggedIn ? (userRole === "admin" ? "/dashboard" : "/home") : "/login"}>
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
                {!isLoggedIn ? (
                  <>
                    <li className="nav__item">
                      <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                        <button className="btn btn-primary" type="button">
                          Login
                        </button>
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/register" onClick={() => setIsMenuOpen(false)}>
                        Register
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li className="nav__item">
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;