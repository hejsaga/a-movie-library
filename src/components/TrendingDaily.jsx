import React from "react";
import { useQuery } from "react-query";
import { getTrendingToday } from "../services/API";
import CarouselComponent from "./partials/CarouselComponent";
import MovieCarousel from "./partials/MovieCarousel";

function PopularMovies() {
  const { data, error, isError, isLoading } = useQuery(
    ["trending-today"],
    () => {
      return getTrendingToday();
    }
  );

  return (
    <>
      <h1 className="listHeadline">Trending movies today</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && <MovieCarousel movies={data.results} />}
    </>
  );
}

export default PopularMovies;
