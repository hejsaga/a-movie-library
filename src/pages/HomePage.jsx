import React, { useEffect } from "react";
import { useIsFetching } from "react-query";
import TopRated from "../components/TopRated";
import TrendingDaily from "../components/TrendingDaily";
import TrendingWeekly from "../components/TrendingWeekly";
import NowPlaying from "../components/NowPlaying";
import Spinner from "../components/partials/Spinner";
import Header from "../components/partials/Header";
import MovieCarousel from "../components/partials/MovieCarousel";
import { useQuery } from "react-query";
import { getNowPlaying } from "../services/API";

function HomePage() {
  const isFetching = useIsFetching();

  const { data, error, isError, isLoading } = useQuery(["now-playing"], () => {
    return getNowPlaying();
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="home">
      {data && <MovieCarousel movies={data.results} />}
      {/* {isFetching ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <NowPlaying />
          <TrendingDaily />
          <TrendingWeekly />
          <TopRated />
        </>
      )} */}
    </div>
  );
}

export default HomePage;
