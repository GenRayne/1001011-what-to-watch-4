import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {movies} from '../../mocks/movies-test.js';

const noopHandler = () => {};

describe(`render App`, () => {
  it(`renders App`, () => {
    const tree = renderer
      .create(
          <App
            headerMovie={movies[0]}
            movies={movies}
            onMovieClick={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
