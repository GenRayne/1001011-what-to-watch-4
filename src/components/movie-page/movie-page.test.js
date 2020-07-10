import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';
import {movies} from '../../mocks/movies-test.js';

describe(`render MoviePage`, () => {
  it(`renders MoviePage`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movies[0]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

