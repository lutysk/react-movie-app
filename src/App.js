import React from 'react';
import Header from './components/Header/Header';
import Filters from './containers/Filters/Filters';
import MovieList from './containers/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './error-boundaries/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Filters />
      <MovieList />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
