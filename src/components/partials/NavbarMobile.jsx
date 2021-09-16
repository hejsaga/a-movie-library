import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../css/Navbar.module.css";
import useScrollBlock from "../../hooks/useScrollBlock";

function NavbarMobile() {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navStyle, setNavStyle] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const navbarPosition = {
    position: "absolute",
  };

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
    <ul className={styles.mobileMenu}>
      <div className={styles.links} onClick={() => toggleOnClick()}>
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/toprated">Top rated</Link>
        <Link to="/genres">Browse all genres</Link>
        <Link to="/search">Search and filters</Link>
      </div>
    </ul>
  );

  return (
    <div>
      <div
        className={styles.mobileNavbar}
        style={navStyle ? navbarPosition : null}
        /* style={toggleMenu ? dropDownBackground : null} */
      >
        <button onClick={() => toggleOnClick()} className={styles.burgerIcon}>
          <GiHamburgerMenu />
        </button>

        {toggleMenu ? menu : ""}
      </div>
    </div>
  );
}

export default NavbarMobile;
