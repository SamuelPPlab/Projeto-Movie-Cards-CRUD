import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
