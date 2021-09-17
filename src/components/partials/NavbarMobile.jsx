import React, { useState, useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import styles from "../css/Navbar.module.css";

function NavbarMobile() {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navStyle, setNavStyle] = useState(false);
  const dropdown = useRef();

  const navbarPosition = {
    // When menu is open, position it absolute to header
    position: "absolute",
  };
  const navbarBackground = {
    // When menu is open, give it a background color
    height: "100vh",
    background: "#181818",
  };

  useEffect(() => {
    // If menu is open, prevent body scroll w/ exception for on the dropdown menu.
    if (toggleMenu) {
      disableBodyScroll(dropdown);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [toggleMenu]);

  useEffect(() => {
    if (location.pathname === "/") {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
  }, [location]);

  const toggleOnClick = () => {
    setToggleMenu((prevShowMenu) => !prevShowMenu);
  };

  const menu = (
    <ul
      className={styles.mobileMenu}
      onClick={() => toggleOnClick()}
      ref={dropdown}
    >
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/toprated">Top rated</Link>
        <Link to="/genres">Browse all genres</Link>
        <Link to="/search">Search and filters</Link>
      </div>
    </ul>
  );

  return (
    <div style={toggleMenu ? navbarBackground : null}>
      <div
        className={styles.mobileNavbar}
        style={navStyle ? navbarPosition : null}
      >
        <button onClick={() => toggleOnClick()} className={styles.burgerIcon}>
          <FiMenu />
        </button>

        {toggleMenu ? menu : ""}
      </div>
    </div>
  );
}

export default NavbarMobile;
