import React from "react";
import { useQuery } from "react-query";
import { getNowPlaying } from "../services/API";
import CarouselComponent from "./partials/CarouselComponent";

function NowPlaying() {
  const { data, error, isError, isLoading } = useQuery(["now-playing"], () => {
    return getNowPlaying();
  });

  return (
    <div className="nowPlaying">
      <h1 className="listHeadline">In cinemas now</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured: {error.message}</p>}

      {data && <CarouselComponent movies={data.results} />}
    </div>
  );
}

export default NowPlaying;
