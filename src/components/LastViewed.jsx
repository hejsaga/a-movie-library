import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import CarouselComponent from "./partials/CarouselComponent";

function LastViewed() {
  const [moviesFromStorage] = useLocalStorage("movies", []);

  // Reverse the order of array to show latest viewd first
  moviesFromStorage.reverse();

  return (
    <div className="lastViewed">
      {moviesFromStorage && moviesFromStorage.length === 0 ? null : (
        <>
          <h1 className="listHeadline">Your last viewed movies</h1>
          <CarouselComponent movies={moviesFromStorage} />
        </>
      )}
    </div>
  );
}

export default LastViewed;
