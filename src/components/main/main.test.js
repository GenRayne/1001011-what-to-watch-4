import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {movies} from '../../mocks/movies-test.js';

const noopHandler = () => {};

describe(`render Main`, () => {
  it(`renders Main`, () => {
    const tree = renderer
    .create(
        <Main
          headerMovie={movies[0]}
          movies={movies}
          onMovieClick={noopHandler}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
