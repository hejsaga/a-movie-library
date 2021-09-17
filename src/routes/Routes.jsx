import React from "react";
import { Route, Switch } from "react-router-dom";
import ActorPage from "../pages/ActorPage";
import CategoryPage from "../pages/CategoryPage";
import HomePage from "../pages/HomePage";
import SearchResult from "../pages/SearchResult";
import ActorMovies from "../components/ActorMovies";
import Category from "../components/Category";
import SimilarMovies from "../components/SimilarMovies";
import TrendingWeekly from "../components/TrendingWeekly";
import TrendingDaily from "../components/TrendingDaily";
import TopRated from "../components/TopRated";
import MoviePage from "../pages/MoviePage";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/genres">
          <CategoryPage />
        </Route>

        <Route path="/genres/:name/:id">
          <Category />
        </Route>

        <Route exact path="/movies/:id/similar">
          <SimilarMovies />
        </Route>

        <Route exact path="/person/:id">
          <ActorPage />
        </Route>

        <Route exact path="/person/:id/movie_credits">
          <ActorMovies />
        </Route>

        <Route path="/search">
          <SearchResult />
        </Route>

        <Route exact path="/trending">
          <TrendingDaily />
          <TrendingWeekly />
        </Route>

        <Route exact path="/toprated">
          <TopRated />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
