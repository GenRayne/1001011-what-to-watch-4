import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const MOVIES = [
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`}
];

const someMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: `2014`,
};

ReactDOM.render(
    <App
      movie={someMovie}
      movies={MOVIES}
    />,
    document.querySelector(`#root`)
);
