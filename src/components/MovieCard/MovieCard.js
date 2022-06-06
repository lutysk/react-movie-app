import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.css';

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
      <h3>{movie.name} - {movie.year}</h3>
      <p>{movie.description}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      imgSrc: PropTypes.string,
      year: PropTypes.string,
      description: PropTypes.string
    }
  )
};

export default MovieCard;
