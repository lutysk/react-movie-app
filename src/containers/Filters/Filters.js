import React from 'react';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import GenreSelector from '../../components/GenreSelector/GenreSelector';

const movieGenreFilters = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const sortOptions = ['Release date', 'Name', 'Genre'];

const movieSortChanged = (event) => {
  console.log(event.target.value);
};

const Filters = () => {
  return (
    <>
      <nav>
        <GenreSelector genres={movieGenreFilters}/>
      </nav>
      <SortDropdown dropdownOptions={sortOptions} id="movie-sort-options" name="movie-sort-options"
                    selectionChanged={movieSortChanged}/>
    </>
  );
};

export default Filters;
