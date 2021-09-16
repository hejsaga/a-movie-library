import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../css/DetailPages.module.css";

function Movies({ movies }) {
  const history = useHistory();
  const imgPrefix = "https://image.tmdb.org/t/p/w300";

  const goToMovie = (id) => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className="movieContainer">
        {movies &&
          movies.results.map((movie, i) => {
            return (
              <div
                className={styles.movies}
                key={i}
                onClick={() => goToMovie(movie.id)}
              >
                <img src={imgPrefix + movie.poster_path} alt="No image"></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
