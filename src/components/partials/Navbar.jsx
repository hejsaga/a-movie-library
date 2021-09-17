import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar() {
  const [navStyle, setNavStyle] = useState(false);
  const location = useLocation();
  const navbarPosition = {
    position: "absolute",
  };

  // If location is "/", navbar should be absolute positioned to header
  useEffect(() => {
    if (location.pathname === "/") {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
  }, [location]);

  return (
    <div className="conditional">
      <div
        className={styles.container}
        style={navStyle ? navbarPosition : null}
      >
        <ul>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/toprated">Top rated</Link>
          <Link to="/genres">Browse all genres</Link>
          <Link to="/search">Search</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
