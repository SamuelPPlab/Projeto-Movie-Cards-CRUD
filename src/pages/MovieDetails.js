import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      isLoading: true,

    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    movieAPI.getMovie(id).then(films => this.setState({movie: films, isLoading: false}))
  }

  render() {
    const { movie } = this.state;
    // Change the condition to check the state
    if (this.state.isLoading) {
      return <Loading />
    }
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
