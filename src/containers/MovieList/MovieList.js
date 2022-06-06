import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './movie-list.css';

const movies = [
  {
    id: 'qwe1',
    name: 'Movie 1',
    description: 'Movie 1 Description',
    imageSrc: '',
    genres: ['Horror'],
    year: '1954'
  },
  {
    id: 'qwe2',
    name: 'Movie 2',
    description: 'Movie 2 Description',
    imageSrc: '',
    genres: ['Horror'],
    year: '1954'
  },
  {
    id: 'qwe3',
    name: 'Movie 3',
    description: 'Movie 3 Description',
    imageSrc: '',
    genres: ['Horror'],
    year: '1954'
  }
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
    </div>
  );
};

export default MovieList;
