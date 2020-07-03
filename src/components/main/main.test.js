import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {movies} from '../../mocks/movies-test.js';

const someMovie = {
  title: `The Movie`,
  genre: `Comedy`,
  releaseYear: 1999,
};

describe(`render Main`, () => {
  it(`renders Main`, () => {
    const tree = renderer
    .create(
        <Main
          headerMovie={someMovie}
          movies={movies}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
