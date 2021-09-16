import React from "react";
import { useParams } from "react-router-dom";
import { getActors } from "../services/API";
import { useQuery } from "react-query";
import ActorCarousel from "./partials/ActorCarousel";

function Actors() {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(["actors", id], () => {
    return getActors(id);
  });

  return (
    <>
      <h2 className="listHeadline">Actors in this movie</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      <ActorCarousel actors={data} />
    </>
  );
}

export default Actors;
