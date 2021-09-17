import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/API";
import { useQuery } from "react-query";
import useLocalStorage from "../hooks/useLocalStorage";
import SimilarMovies from "../components/SimilarMovies";
import LastViewed from "../components/LastViewed";
import Actors from "../components/Actors";
import Spinner from "../components/partials/Spinner";
import styles from "../components/css/DetailPages.module.css";

// API return error to console for non existing images with GET https://image.tmdb.org/t/p/w300null 404, it's made like that by design. It's common on this page.
function Movie() {
  const { id } = useParams();
  const imgPrefix = "https://image.tmdb.org/t/p/w300";
  const [movies, setMovies] = useLocalStorage("movies", []);
  const { data, error, isFetching } = useQuery(["movie", id], () => {
    return getMovie(id);
  });

  useEffect(() => {
    if (data) {
      const object = {
        id: id,
        title: data.title,
        poster_path: data.poster_path,
      };

      // Check if the movie is already in local storage
      let isInArray =
        movies.find(function (movie) {
          return movie.id === id;
        }) !== undefined;

      // If we have 10 items in storage, remove the first index
      if (movies.length > 9) {
        movies.shift();
      }

      // If no duplicates, save movie to local storage
      if (!isInArray) {
        setMovies([...movies, object]);
      }
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      {error && <p>An error occured: {error.message}</p>}

      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {data && (
            <>
              <div className={styles.container}>
                <h1>{data.title}</h1>
                <h2>{data.tagline}</h2>

                <div className={styles.imageContainer}>
                  <img src={imgPrefix + data.poster_path}></img>´{" "}
                </div>

                <p>{data.overview}</p>
                <p>Runtime: {data.runtime} min</p>
                <p className={styles.vote}>Rating: {data.vote_average}</p>
              </div>
            </>
          )}

          <SimilarMovies />
          <Actors />
          <LastViewed movies={movies} />
        </>
      )}
    </div>
  );
}

export default Movie;
