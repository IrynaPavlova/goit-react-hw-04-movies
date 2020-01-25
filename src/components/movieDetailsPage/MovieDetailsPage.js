import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import services from "../../services/services";
import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    cast: [],
    reviews: []
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    services
      .getMovieDetails(id)
      .then(data => this.setState({ movie: data.data }));

    services.getCasts(id).then(data => this.setState({ cast: data }));
    services
      .getReviews(id)
      .then(data => this.setState({ reviews: data.data.results }));
  }

  handleGoBack = () => {
    //this.props.history.push("/");
    this.props.history.goBack();
  };

  render() {
    const { movie, cast, reviews } = this.state;
    return (
      <div>
        {movie && (
          <>
            <button type="button" onClick={this.handleGoBack}>
              Go back
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h2>{movie.original_title}</h2>

            <p>Use score : {Math.round(movie.popularity)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres !== 0 && (
                <>
                  {movie.genres.map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </>
              )}
            </ul>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`${this.props.match.path}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${this.props.match.path}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <Route
              path={`${this.props.match.path}/cast`}
              render={() => <Cast cast={cast} />}
            />
            <Route
              path={`${this.props.match.path}/reviews`}
              render={() => <Reviews reviews={reviews} />}
            />
          </>
        )}
      </div>
    );
  }
}
