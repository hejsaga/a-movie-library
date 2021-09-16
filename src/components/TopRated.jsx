import React from "react";
import { useQuery } from "react-query";
import { getTopRated } from "../services/API";
import CarouselComponent from "./partials/CarouselComponent";

function TopRated() {
  const { data, error, isError, isLoading } = useQuery(["top-rated"], () => {
    return getTopRated();
  });

  return (
    <>
      <h1 className="listHeadline">Top rated</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && <CarouselComponent movies={data.results} />}
    </>
  );
}

export default TopRated;
