import React from "react";
import styles from "../css/SearchBar.module.css";

function SearchBar() {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchField}
          placeholder="Search for movies or actors"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>

        <button className={styles.searchButton} onClick={() => handleSearch()}>
          <FaSearch />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
