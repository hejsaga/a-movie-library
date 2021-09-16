import React from "react";
import { getActorMovies } from "../services/API";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CarouselComponent from "./partials/CarouselComponent";

function ActorMovies() {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["actor-movies", id],
    () => {
      return getActorMovies(id);
    }
  );

  return (
    <>
      <h1 className="listHeadline">Filmography</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && <CarouselComponent movies={data.cast} />}
    </>
  );
}

export default ActorMovies;
