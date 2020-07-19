import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';
import {movies} from '../../mocks/movies-test.js';

const noopHandler = () => {};

describe(`render MoviePage`, () => {
  it(`renders MoviePage with 0 rating`, () => {
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

  it(`renders MoviePage with 3 rating`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movies[1]}
            onMovieClick={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MoviePage with 5 rating`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movies[2]}
            onMovieClick={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MoviePage with 8 rating`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movies[3]}
            onMovieClick={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MoviePage with 10 rating`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movies[4]}
            onMovieClick={noopHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

