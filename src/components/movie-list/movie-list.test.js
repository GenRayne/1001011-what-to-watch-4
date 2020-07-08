import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';
import {movies} from '../../mocks/movies-test.js';

describe(`render MovieList`, () => {
  it(`renders MovieList`, () => {
    const handleCardTitleClick = jest.fn();
    const tree = renderer
      .create(
          <MovieList
            movies={movies}
            onCardTitleClick={handleCardTitleClick}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
