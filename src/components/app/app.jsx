import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import Main from '../main/main.jsx';

const App = ({headerMovie, movies}) => (
  <Main
    headerMovie={headerMovie}
    movies={movies}
  />
);

App.propTypes = {
  headerMovie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    releaseYear: number.isRequired,
  }),
  movies: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
      })
  ),
};

export default App;
