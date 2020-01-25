import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import Nav from "./nav/Nav";
import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" exact component={MoviePage} />
      </Switch>
    </div>
  );
};

export default App;
