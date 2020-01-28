import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("./movieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <div>
      <Nav />
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path="/" exact component={HomePage} />} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />} />
          <Route path="/movies" exact component={MoviePage} />} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
