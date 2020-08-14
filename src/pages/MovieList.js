   /* exemplo do site 
    https://imasters.com.br/front-end/entendendo-estado-de-componentes-com-react-na-pratica */
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '.../components/Loading';
import React from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: '' };
  }
  render() {
    const { movies } = this.state;
    if (movies === '') {
      return (
        <Loading />;
      )
        /* <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div> 
      ); */
    }
  }
}

export default MovieList;
