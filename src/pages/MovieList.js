import React, { Component } from 'react';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from './NotFound';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movie) => this.setState({
        movies: movie,
        loading: false,
      }),
    );
  }

  render() {
    const { movies, loading, error } = this.state;

    if (loading) return <Loading />;
    if (error) return <NotFound />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
