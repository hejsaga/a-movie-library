import React, { useState, useEffect } from "react";
import styles from "../css/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { NumberParam, StringParam, useQueryParams } from "use-query-params";

function SearchBar() {
  const [query, setQuery] = useQueryParams({
    query: StringParam,
    page: NumberParam,
  });

  useEffect(() => {
    console.log("Search:", query.query);
  }, query);

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchField}
          placeholder="Search for movies or actors"
          type="text"
          onChange={(e) => {
            setQuery({ query: e.target.value });
          }}
        ></input>

        <button
          className={styles.searchButton}
          onClick={() => setQuery({ page: 1 })}
        >
          <FaSearch />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
