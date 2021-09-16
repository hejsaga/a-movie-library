import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Media from "react-media";
import Navbar from "./components/partials/Navbar";
import NavbarMobile from "./components/partials/NavbarMobile";
import MoviePage from "./pages/MoviePage";
import Routes from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Media causes console error „Can't perform a React state update on an unmounted component“ without me actually calling to update state. Seems to be a bug in package. Will ignore warning until for now. */}
        <Media
          queries={{
            small: "(max-width: 1110px)",
            large: "(min-width: 1110px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small && <NavbarMobile />}
              {matches.large && <Navbar />}
            </>
          )}
        </Media>

        {/* This route did not render properly at all times in the Routes component, will be taken care of. */}
        <Route exact path="/movies/:id">
          <MoviePage />
        </Route>

        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
