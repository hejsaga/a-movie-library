import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getGenres } from "../services/API";
import { useHistory } from "react-router-dom";
import styles from "./css/Categories.module.css";

// For future reference: This component could be a drowdown menu from navbar or something other cool instead of a list.

function Categories() {
  const history = useHistory();
  const { data, error, isError, isLoading } = useQuery(["genres"], () => {
    return getGenres();
  });

  const renderCategory = (name, id) => {
    let nametoURL = name.toLowerCase();
    history.push(`/genres/${nametoURL}/${id}`);
  };

  return (
    <>
      <h1 className={styles.headline}>Categories</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data &&
        data.genres.map((category, i) => {
          return (
            <div
              className={styles.container}
              key={i}
              onClick={() => renderCategory(category.name, category.id)}
            >
              <a>{category.name}</a>
            </div>
          );
        })}
    </>
  );
}

export default Categories;
