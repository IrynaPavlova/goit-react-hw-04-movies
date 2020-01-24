import React, { Component } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import MoviesPage from "./moviesPage/MoviesPage";
import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
import Cast from "./movieDetailsPage/cast/Cast";
import Reviews from "./movieDetailsPage/reviews/Reviews";
import services from "../services/services";

//import { useRoutes } from "./routes";

export default class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    services.getData().then(data => {
      this.setState({ movies: data });
    });
  };

  getMoviesById = e => {
    const movie = this.state.movies.filter(movie => movie.id === e.target.id);
  };
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/movies">Movies</Link>
        <br></br>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                movies={this.state.movies}
                getMoviesById={this.getMoviesById}
              />
            )}
          />
          <Route path="/movies" render={() => <MoviesPage />} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
