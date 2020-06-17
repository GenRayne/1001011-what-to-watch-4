import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const someMovie = {
  title: `The Movie`,
};

describe(`render MovieCard`, () => {
  it(`renders MovieCard`, () => {
    const tree = renderer
      .create(
          <MovieCard
            movie={someMovie}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
