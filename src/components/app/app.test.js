import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const MOVIES = [
  {id: `1`, title: `Fantastic Beasts`},
  {id: `2`, title: `Bohemian Rhapsody`},
  {id: `3`, title: `Macbeth`}
];

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
            movies={MOVIES}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
