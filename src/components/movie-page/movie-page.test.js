import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';
import {movies} from '../../mocks/movies-test.js';

const noopHandler = () => {};

describe(`render MoviePage`, () => {
  it(`renders MoviePage`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movies[0]}
            onMovieClick={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

