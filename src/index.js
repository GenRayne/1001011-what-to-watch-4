import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const MOVIES = [
  {id: `1`, title: `Fantastic Beasts`},
  {id: `2`, title: `Bohemian Rhapsody`},
  {id: `3`, title: `Macbeth`}
];

const someMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
};

ReactDOM.render(
    <App
      headerMovie={someMovie}
      movies={MOVIES}
    />,
    document.querySelector(`#root`)
);
