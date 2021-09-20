import React from "react";
import { useQuery } from "react-query";
import { getTrendingWeek } from "../services/API";
import CarouselComponent from "./partials/CarouselComponent";
import MovieCarousel from "./partials/MovieCarousel";

function TrendingWeekly() {
  const { data, error, isError, isLoading } = useQuery(
    ["trending-weekly"],
    () => {
      return getTrendingWeek();
    }
  );

  return (
    <>
      <h1 className="listHeadline">Trending movies this week</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && <MovieCarousel movies={data.results} />}
    </>
  );
}

export default TrendingWeekly;
