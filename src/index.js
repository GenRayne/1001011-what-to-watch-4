import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {movies} from './mocks/movies.js';

const someMovie = {
  id: `0`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <App
      headerMovie={someMovie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
