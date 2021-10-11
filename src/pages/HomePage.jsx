import React from "react";
import { useIsFetching } from "react-query";
import TopRated from "../components/TopRated";
import TrendingDaily from "../components/TrendingDaily";
import TrendingWeekly from "../components/TrendingWeekly";
import NowPlaying from "../components/NowPlaying";
import Spinner from "../components/partials/Spinner";
import Header from "../components/partials/Header";

function HomePage() {
  const isFetching = useIsFetching();

  return (
    <div className="home">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <NowPlaying />
          <TrendingDaily />
          <TrendingWeekly />
          <TopRated />
        </>
      )}
    </div>
  );
}

export default HomePage;
