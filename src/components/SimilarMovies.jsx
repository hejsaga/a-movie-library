import React from "react";
import { getSimilarMovies } from "../services/API";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import MovieCarousel from "./partials/MovieCarousel";

function SimilarMovies() {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(["similar", id], () => {
    return getSimilarMovies(id);
  });

  return (
    <>
      <h2 className="listHeadline">Similar movies to this</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && <MovieCarousel movies={data.results} />}
    </>
  );
}

export default SimilarMovies;
