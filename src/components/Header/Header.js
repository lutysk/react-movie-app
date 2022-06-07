import React from 'react';
import Button from '../Button/Button';

const addMovie = () => {
  console.log('Add movie btn clicked');
}

const searchMovie = () => {
  console.log('Search btn clicked');
}

const Header = () => {
  return (
    <header>
      <Button btnClicked={addMovie}>+ Add movie</Button>
      <h1>Find your movie</h1>
      <input type="text" placeholder={'What do you want to search?'}/>
      <Button btnClicked={searchMovie}>Search</Button>
    </header>
  );
};

export default Header;
