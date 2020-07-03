import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {someMovie} from '../../mocks/movies-test.js';

describe(`render MovieCard`, () => {
  it(`renders MovieCard`, () => {
    const handleTitleClick = jest.fn();
    const handleCardMouseEnter = jest.fn();
    const handleCardMouseLeave = jest.fn();

    const tree = renderer
      .create(
          <MovieCard
            movie={someMovie}
            onTitleClick={handleTitleClick}
            onCardMouseEnter={handleCardMouseEnter}
            onCardMouseLeave={handleCardMouseLeave}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
