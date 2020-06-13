import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import Main from '../main/main.jsx';

const App = ({movie, movies}) => (
  <Main
    movie={movie}
    movies={movies}
  />
);

App.propTypes = {
  movie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    releaseYear: string.isRequired,
  }),
  movies: arrayOf(
      shape({
        title: string.isRequired
      })
  ),
};

export default App;
