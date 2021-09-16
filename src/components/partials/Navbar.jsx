import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import styles from "../css/Navbar.module.css";

function Navbar() {
  const history = useHistory();
  const [searchString, setSearchString] = useState();
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

          {/* <div className={styles.searchFieldContainer}>
            
          </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
