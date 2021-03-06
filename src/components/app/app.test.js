import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {movies} from '../../mocks/movies-test.js';

const someMovie = {
  title: `The Movie`,
  genre: `Comedy`,
  releaseYear: 1999,
};

describe(`render App`, () => {
  it(`renders App`, () => {
    const tree = renderer
      .create(
          <App
            headerMovie={someMovie}
            movies={movies}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
