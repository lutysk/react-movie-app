import React from 'react';
import PropTypes from 'prop-types';

const GenreSelector = ({genres}) => {
  return (<ul>
    {
      genres.map((genre, i) => (
        <li key={`genre-item-${i}`}><a href={`/${genre.toLowerCase()}`}>{genre}</a></li>))
    }
  </ul>);
};

GenreSelector.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default GenreSelector;
